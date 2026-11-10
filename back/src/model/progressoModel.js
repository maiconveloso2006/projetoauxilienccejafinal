const { db } = require('../databases/DatabaseContext.js');

async function query(sql, params = []) {
    const [rows] = await db.execute(sql, params);
    return rows;
}

async function run(sql, params = []) {
    const [result] = await db.execute(sql, params);
    return result;
}

function first(rows) {
    return Array.isArray(rows) && rows.length ? rows[0] : null;
}

function normalize(text) {
    return String(text || '')
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .trim()
        .toLowerCase();
}

const SUBJECT_ALIASES = {
    matematica: 'Matematica',
    portugues: 'Portugues',
    historia: 'Historia',
    geografia: 'Geografia',
    ciencias: 'Ciencias',
    sociologia: 'Sociologia',
    ingles: 'Ingles'
};

async function ensureUser(userId) {
    const id = Number(userId);
    if (!id) throw new Error('Usuário inválido.');

    let user = first(await query('SELECT * FROM usuarios WHERE id_usuario = ?', [id]));

    // O cadastro atual do site ainda utiliza a tabela legada `users`.
    // Ao primeiro evento de progresso, sincronizamos esse usuário para
    // `usuarios`, onde ficam os dados de acompanhamento.
    if (!user) {
        const legacy = first(await query('SELECT * FROM users WHERE id = ?', [id]));
        if (legacy) {
            const matricula = `2026-${String(id).padStart(3, '0')}`;
            await run(
                `INSERT INTO usuarios
                    (id_usuario, nome, email, senha, nivel, dias_ativos, progresso_geral, matricula)
                 VALUES (?, ?, ?, ?, 'Basico', 0, 0, ?)`,
                [id, legacy.name, legacy.login, legacy.password, matricula]
            );
            user = first(await query('SELECT * FROM usuarios WHERE id_usuario = ?', [id]));
        }
    }

    if (!user) throw new Error('Usuário não encontrado.');
    return user;
}

async function ensureSubject(materia) {
    const requested = SUBJECT_ALIASES[normalize(materia)] || String(materia || 'Outros').trim() || 'Outros';
    let subject = first(await query('SELECT * FROM materias WHERE LOWER(nome_materia) = LOWER(?)', [requested]));

    if (!subject) {
        const result = await run(
            'INSERT INTO materias (nome_materia, descricao, icone) VALUES (?, ?, ?)',
            [requested, 'Conteúdos e atividades de ' + requested, 'bi-book']
        );
        subject = first(await query('SELECT * FROM materias WHERE id_materia = ?', [result.insertId]));
    }

    return subject;
}

async function ensureActivity(subjectId, titulo, tipo, xp) {
    const safeTitle = String(titulo || 'Atividade da plataforma').trim();
    let activity = first(await query(
        'SELECT * FROM atividades WHERE id_materia = ? AND titulo = ?',
        [subjectId, safeTitle]
    ));

    if (!activity) {
        const result = await run(
            'INSERT INTO atividades (id_materia, titulo, descricao, tipo, xp_recompensa) VALUES (?, ?, ?, ?, ?)',
            [subjectId, safeTitle, 'Atividade registrada automaticamente pela plataforma.', tipo || 'VIDEO', Number(xp) || 5]
        );
        activity = first(await query('SELECT * FROM atividades WHERE id_atividade = ?', [result.insertId]));
    }

    return activity;
}

async function updateActiveDays(userId) {
    const events = await query('SELECT criado_em FROM progresso_eventos WHERE id_usuario = ?', [userId]);
    const days = new Set();
    for (const event of events) {
        if (!event.criado_em) continue;
        const value = String(event.criado_em).slice(0, 10);
        if (value) days.add(value);
    }

    await run('UPDATE usuarios SET dias_ativos = ? WHERE id_usuario = ?', [days.size, userId]);
    return days.size;
}

async function recalculate(userId) {
    const rows = await query(
        `SELECT
            COUNT(a.id_atividade) AS total,
            SUM(CASE WHEN ua.status = 'CONCLUIDA' THEN 1 ELSE 0 END) AS concluidas,
            AVG(CASE WHEN ua.status = 'CONCLUIDA' THEN COALESCE(ua.nota, 100) END) AS media
         FROM atividades a
         LEFT JOIN usuario_atividades ua
           ON ua.id_atividade = a.id_atividade AND ua.id_usuario = ?`,
        [userId]
    );

    const row = first(rows) || {};
    const total = Number(row.total) || 0;
    const concluidas = Number(row.concluidas) || 0;
    const progresso = total ? Math.round((concluidas / total) * 100) : 0;
    const media = Math.round(Number(row.media) || 0);

    await run('UPDATE usuarios SET progresso_geral = ? WHERE id_usuario = ?', [progresso, userId]);
    const diasAtivos = await updateActiveDays(userId);

    return {
        progressoGeral: progresso,
        mediaGeral: media,
        totalAtividades: total,
        totalConcluidas: concluidas,
        totalPendentes: Math.max(total - concluidas, 0),
        diasAtivos
    };
}

async function registrarEvento(userId, payload = {}) {
    const user = await ensureUser(userId);
    const evento = String(payload.evento || 'VISITA').toUpperCase();
    const pagina = String(payload.pagina || '').slice(0, 255);
    const titulo = String(payload.titulo || pagina || 'Página').slice(0, 150);
    const materia = String(payload.materia || '').slice(0, 100);
    const tipo = String(payload.tipo || 'VIDEO').toUpperCase().slice(0, 30);
    const percentual = Math.max(0, Math.min(100, Number(payload.percentual) || 0));
    const nota = payload.nota === undefined || payload.nota === null || payload.nota === ''
        ? null : Number(payload.nota);
    const tempoSegundos = Math.max(0, Number(payload.tempoSegundos) || 0);

    await run(
        `INSERT INTO progresso_eventos
            (id_usuario, evento, pagina, titulo, materia, tipo, percentual, nota, tempo_segundos)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [user.id_usuario, evento, pagina, titulo, materia, tipo, percentual, nota, tempoSegundos]
    );

    let atividade = null;

    if (evento === 'CONCLUSAO') {
        const subject = await ensureSubject(materia);
        atividade = await ensureActivity(subject.id_materia, titulo, tipo, 10);

        const existing = first(await query(
            'SELECT * FROM usuario_atividades WHERE id_usuario = ? AND id_atividade = ?',
            [user.id_usuario, atividade.id_atividade]
        ));

        const wasCompleted = existing && existing.status === 'CONCLUIDA';

        if (!existing) {
            await run(
                `INSERT INTO usuario_atividades
                    (id_usuario, id_atividade, status, nota, concluido_em)
                 VALUES (?, ?, 'CONCLUIDA', ?, CURRENT_TIMESTAMP)`,
                [user.id_usuario, atividade.id_atividade, nota]
            );
        } else {
            await run(
                `UPDATE usuario_atividades
                 SET status = 'CONCLUIDA', nota = COALESCE(?, nota), concluido_em = CURRENT_TIMESTAMP
                 WHERE id_usuario = ? AND id_atividade = ?`,
                [nota, user.id_usuario, atividade.id_atividade]
            );
        }

        if (!wasCompleted) {
            await run(
                'UPDATE usuarios SET pontos_xp = COALESCE(pontos_xp, 0) + ? WHERE id_usuario = ?',
                [Number(atividade.xp_recompensa) || 10, user.id_usuario]
            );
        }
    }

    const resumo = await recalculate(user.id_usuario);

    return {
        message: 'Progresso registrado com sucesso.',
        data: {
            usuarioId: user.id_usuario,
            evento,
            atividade,
            resumo
        }
    };
}

async function getProgress(userId) {
    const user = await ensureUser(userId);
    const resumo = await recalculate(user.id_usuario);

    const eventos = await query(
        `SELECT id_evento, evento, pagina, titulo, materia, tipo, percentual, nota,
                tempo_segundos, criado_em
         FROM progresso_eventos
         WHERE id_usuario = ?
         ORDER BY id_evento DESC
         LIMIT 50`,
        [user.id_usuario]
    );

    return {
        message: 'Success',
        data: {
            usuario: user,
            resumo,
            eventos
        }
    };
}

module.exports = { registrarEvento, getProgress };
