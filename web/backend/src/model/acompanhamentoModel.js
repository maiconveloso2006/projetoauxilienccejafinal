const { db } = require("../databases/DatabaseContext.js");

const defaultSubjects = [
    {
        nome: 'Matematica',
        descricao: 'Numeros, algebra e resolucao de problemas',
        icone: 'bi-calculator',
        atividades: [
            ['Operacoes Basicas', 'Soma, subtracao, multiplicacao e divisao', 'VIDEO', 10],
            ['Lista de Exercicios 1', 'Exercicios de matematica basica', 'EXERCICIO', 20],
            ['Equacoes do 1o Grau', 'Introducao a equacoes', 'QUIZ', 25]
        ]
    },
    {
        nome: 'Portugues',
        descricao: 'Gramatica, leitura e interpretacao de texto',
        icone: 'bi-book',
        atividades: [
            ['Classes de Palavras', 'Gramatica basica', 'VIDEO', 10],
            ['Simulado de Interpretacao', 'Questoes de leitura e texto', 'QUIZ', 30]
        ]
    },
    {
        nome: 'Historia',
        descricao: 'Historia do Brasil e cidadania',
        icone: 'bi-bank',
        atividades: [
            ['Brasil Colonial', 'Chegada dos portugueses e colonizacao', 'VIDEO', 10],
            ['Lista Independencia', 'Exercicios sobre Independencia do Brasil', 'EXERCICIO', 20]
        ]
    },
    {
        nome: 'Geografia',
        descricao: 'Espaco geografico, mapas e sociedade',
        icone: 'bi-globe-americas',
        atividades: [
            ['Geografia Fisica', 'Relevo, clima e vegetacao', 'VIDEO', 10],
            ['Lista Relevo', 'Exercicios sobre relevo brasileiro', 'EXERCICIO', 20]
        ]
    },
    {
        nome: 'Ciencias',
        descricao: 'Biologia, quimica, fisica e meio ambiente',
        icone: 'bi-flask',
        atividades: [
            ['Celulas', 'Estrutura e funcionamento das celulas', 'VIDEO', 10],
            ['Tabela Periodica', 'Elementos quimicos no cotidiano', 'PDF', 15]
        ]
    }
];

async function query(sql, params) {
    const [rows] = await db.execute(sql, params);
    return rows;
}

async function run(sql, params) {
    const [result] = await db.execute(sql, params);
    return result;
}

function first(rows) {
    return Array.isArray(rows) && rows.length ? rows[0] : null;
}

async function ensureSeedData() {
    const materiaCount = first(await query('SELECT COUNT(*) AS total FROM materias'));
    if (materiaCount && Number(materiaCount.total) > 0) return;

    for (const subject of defaultSubjects) {
        const result = await run(
            'INSERT INTO materias (nome_materia, descricao, icone) VALUES (?, ?, ?)',
            [subject.nome, subject.descricao, subject.icone]
        );
        const idMateria = result.insertId;

        for (const atividade of subject.atividades) {
            await run(
                'INSERT INTO atividades (id_materia, titulo, descricao, tipo, xp_recompensa) VALUES (?, ?, ?, ?, ?)',
                [idMateria, atividade[0], atividade[1], atividade[2], atividade[3]]
            );
        }
    }
}

async function ensureUsuario(userId) {
    const numericUserId = Number(userId) || 1;
    let usuario = first(await query('SELECT * FROM usuarios WHERE id_usuario = ?', [numericUserId]));
    if (usuario) return usuario;

    const siteUser = first(await query('SELECT * FROM users WHERE id = ?', [numericUserId]));
    const nome = (siteUser && siteUser.name) || 'Estudante Encceja';
    const email = (siteUser && siteUser.login) || `estudante${numericUserId}@local`;
    const senha = (siteUser && siteUser.password) || 'local';
    const matricula = `2026-${String(numericUserId).padStart(3, '0')}`;

    await run(
        `INSERT INTO usuarios
            (id_usuario, nome, email, senha, nivel, dias_ativos, progresso_geral, matricula)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [numericUserId, nome, email, senha, 'Intermediario', 1, 0, matricula]
    );

    return first(await query('SELECT * FROM usuarios WHERE id_usuario = ?', [numericUserId]));
}

async function ensureUserProgress(userId) {
    const materias = await query('SELECT id_materia FROM materias ORDER BY id_materia');

    for (const materia of materias) {
        const existing = first(await query(
            'SELECT id_progresso FROM progresso_materias WHERE id_usuario = ? AND id_materia = ?',
            [userId, materia.id_materia]
        ));

        if (!existing) {
            const totalRows = first(await query(
                'SELECT COUNT(*) AS total FROM atividades WHERE id_materia = ?',
                [materia.id_materia]
            ));
            await run(
                `INSERT INTO progresso_materias
                    (id_usuario, id_materia, percentual, media, atividades_concluidas, atividades_pendentes)
                 VALUES (?, ?, 0, 0, 0, ?)`,
                [userId, materia.id_materia, Number(totalRows.total) || 0]
            );
        }
    }

    const atividades = await query('SELECT id_atividade FROM atividades ORDER BY id_atividade');
    for (const atividade of atividades) {
        const existing = first(await query(
            'SELECT id_usuario_atividade FROM usuario_atividades WHERE id_usuario = ? AND id_atividade = ?',
            [userId, atividade.id_atividade]
        ));
        if (!existing) {
            await run(
                'INSERT INTO usuario_atividades (id_usuario, id_atividade, status) VALUES (?, ?, ?)',
                [userId, atividade.id_atividade, 'PENDENTE']
            );
        }
    }
}

async function recalculateProgress(userId) {
    const materias = await query('SELECT id_materia FROM materias ORDER BY id_materia');
    let totalAtividades = 0;
    let totalConcluidas = 0;
    let somaMedias = 0;

    for (const materia of materias) {
        const stats = first(await query(
            `SELECT
                COUNT(a.id_atividade) AS total,
                SUM(CASE WHEN ua.status = 'CONCLUIDA' THEN 1 ELSE 0 END) AS concluidas,
                AVG(CASE WHEN ua.status = 'CONCLUIDA' THEN COALESCE(ua.nota, 100) END) AS media
             FROM atividades a
             LEFT JOIN usuario_atividades ua
                ON ua.id_atividade = a.id_atividade AND ua.id_usuario = ?
             WHERE a.id_materia = ?`,
            [userId, materia.id_materia]
        ));

        const total = Number(stats.total) || 0;
        const concluidas = Number(stats.concluidas) || 0;
        const pendentes = Math.max(total - concluidas, 0);
        const percentual = total ? Math.round((concluidas / total) * 100) : 0;
        const media = Math.round(Number(stats.media) || percentual);

        await run(
            `UPDATE progresso_materias
             SET percentual = ?, media = ?, atividades_concluidas = ?, atividades_pendentes = ?
             WHERE id_usuario = ? AND id_materia = ?`,
            [percentual, media, concluidas, pendentes, userId, materia.id_materia]
        );

        totalAtividades += total;
        totalConcluidas += concluidas;
        somaMedias += media;
    }

    const progressoGeral = totalAtividades ? Math.round((totalConcluidas / totalAtividades) * 100) : 0;
    const mediaGeral = materias.length ? Math.round(somaMedias / materias.length) : 0;

    await run(
        'UPDATE usuarios SET progresso_geral = ? WHERE id_usuario = ?',
        [progressoGeral, userId]
    );

    return {
        progressoGeral,
        mediaGeral,
        totalAtividades,
        totalConcluidas,
        totalPendentes: Math.max(totalAtividades - totalConcluidas, 0)
    };
}

async function GetByUser(userId) {
    await ensureSeedData();
    const usuario = await ensureUsuario(userId);
    await ensureUserProgress(usuario.id_usuario);
    const stats = await recalculateProgress(usuario.id_usuario);

    const materias = await query(
        `SELECT
            m.id_materia,
            m.nome_materia,
            m.descricao,
            m.icone,
            pm.percentual,
            pm.media,
            pm.atividades_concluidas,
            pm.atividades_pendentes
         FROM materias m
         LEFT JOIN progresso_materias pm
            ON pm.id_materia = m.id_materia AND pm.id_usuario = ?
         ORDER BY m.id_materia`,
        [usuario.id_usuario]
    );

    const atividades = await query(
        `SELECT
            a.id_atividade,
            a.id_materia,
            a.titulo,
            a.descricao,
            a.tipo,
            a.xp_recompensa,
            ua.status,
            ua.nota,
            ua.concluido_em
         FROM atividades a
         LEFT JOIN usuario_atividades ua
            ON ua.id_atividade = a.id_atividade AND ua.id_usuario = ?
         ORDER BY a.id_materia, a.id_atividade`,
        [usuario.id_usuario]
    );

    return {
        message: 'Success',
        data: {
            usuario,
            resumo: stats,
            materias,
            atividades
        }
    };
}

async function UpdateActivity(userId, activityId, payload) {
    await ensureSeedData();
    const usuario = await ensureUsuario(userId);
    await ensureUserProgress(usuario.id_usuario);

    const status = payload && payload.status === 'CONCLUIDA' ? 'CONCLUIDA' : 'PENDENTE';
    const nota = payload && payload.nota !== undefined ? payload.nota : null;
    const concluidoEm = status === 'CONCLUIDA' ? new Date().toISOString() : null;

    await run(
        `UPDATE usuario_atividades
         SET status = ?, nota = COALESCE(?, nota), concluido_em = ?
         WHERE id_usuario = ? AND id_atividade = ?`,
        [status, nota, concluidoEm, usuario.id_usuario, activityId]
    );

    await recalculateProgress(usuario.id_usuario);
    return GetByUser(usuario.id_usuario);
}

module.exports = { GetByUser, UpdateActivity };
