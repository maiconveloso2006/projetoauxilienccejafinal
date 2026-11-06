const { db } = require("../databases/DatabaseContext.js");

async function query(sql, params) {
    const [rows] = await db.execute(sql, params || []);
    return rows;
}

async function run(sql, params) {
    const [result] = await db.execute(sql, params || []);
    return result;
}

function first(rows) {
    return Array.isArray(rows) && rows.length ? rows[0] : null;
}

// ── Simulados ─────────────────────────────────────────────────────────────────

async function Get() {
    const rows = await query(`SELECT * FROM simulados WHERE ativo = 1 ORDER BY id_simulado`);
    return { message: "Success", data: rows };
}

async function GetById(id) {
    const simulado = first(await query(
        `SELECT * FROM simulados WHERE id_simulado = ?`, [id]
    ));
    if (!simulado) return { message: "Error", data: "Simulado não encontrado." };

    // Busca as questões com alternativas
    const questoes = await query(
        `SELECT q.*, m.nome_materia
         FROM questoes q
         JOIN simulado_questoes sq ON sq.id_questao = q.id_questao
         LEFT JOIN materias m ON m.id_materia = q.id_materia
         WHERE sq.id_simulado = ?
         ORDER BY q.id_questao`,
        [id]
    );

    for (const q of questoes) {
        q.alternativas = await query(
            `SELECT * FROM alternativas WHERE id_questao = ? ORDER BY id_alternativa`,
            [q.id_questao]
        );
    }

    return { message: "Success", data: { ...simulado, questoes } };
}

async function Post(payload) {
    if (!payload) return { message: "Error", data: "Dados não informados!" };
    const { titulo, descricao, tempo_minutos, questoes } = payload;

    if (!titulo) return { message: "Error", data: "Título é obrigatório." };

    const result = await run(
        `INSERT INTO simulados (titulo, descricao, tempo_minutos, ativo) VALUES (?, ?, ?, 1)`,
        [titulo, descricao || null, tempo_minutos || null]
    );
    const idSimulado = result.insertId;

    if (Array.isArray(questoes) && questoes.length) {
        for (const idQuestao of questoes) {
            await run(
                `INSERT INTO simulado_questoes (id_simulado, id_questao) VALUES (?, ?)`,
                [idSimulado, idQuestao]
            );
        }
    }

    return { message: "Success", data: { insertId: idSimulado } };
}

async function Put(payload, id) {
    if (!payload) return { message: "Error", data: "Dados não informados!" };
    const { titulo, descricao, tempo_minutos, ativo } = payload;
    const result = await run(
        `UPDATE simulados
         SET titulo = COALESCE(?, titulo),
             descricao = COALESCE(?, descricao),
             tempo_minutos = COALESCE(?, tempo_minutos),
             ativo = COALESCE(?, ativo)
         WHERE id_simulado = ?`,
        [titulo || null, descricao || null,
         tempo_minutos !== undefined ? tempo_minutos : null,
         ativo !== undefined ? (ativo ? 1 : 0) : null, id]
    );
    return { message: "Success", data: result };
}

async function Delete(id) {
    await run(`DELETE FROM simulado_questoes WHERE id_simulado = ?`, [id]);
    const result = await run(`DELETE FROM simulados WHERE id_simulado = ?`, [id]);
    return { message: "Success", data: result };
}

// ── Tentativas ────────────────────────────────────────────────────────────────

async function IniciarTentativa(userId, idSimulado) {
    const simulado = first(await query(
        `SELECT id_simulado FROM simulados WHERE id_simulado = ? AND ativo = 1`, [idSimulado]
    ));
    if (!simulado) return { message: "Error", data: "Simulado não encontrado ou inativo." };

    const result = await run(
        `INSERT INTO tentativas_simulado (id_usuario, id_simulado, iniciado_em)
         VALUES (?, ?, ?)`,
        [userId, idSimulado, new Date().toISOString()]
    );
    return { message: "Success", data: { insertId: result.insertId } };
}

async function FinalizarTentativa(idTentativa, payload) {
    if (!payload) return { message: "Error", data: "Dados não informados!" };
    const { acertos, erros, tempo_gasto } = payload;
    const totalQuestoes = (acertos || 0) + (erros || 0);
    const nota = totalQuestoes ? Number(((acertos / totalQuestoes) * 10).toFixed(2)) : 0;

    const result = await run(
        `UPDATE tentativas_simulado
         SET acertos = ?, erros = ?, nota = ?, tempo_gasto = ?, finalizado_em = ?
         WHERE id_tentativa = ?`,
        [acertos || 0, erros || 0, nota, tempo_gasto || null,
         new Date().toISOString(), idTentativa]
    );
    return { message: "Success", data: result };
}

async function GetTentativasPorUsuario(userId) {
    const rows = await query(
        `SELECT t.*, s.titulo AS titulo_simulado
         FROM tentativas_simulado t
         LEFT JOIN simulados s ON s.id_simulado = t.id_simulado
         WHERE t.id_usuario = ?
         ORDER BY t.id_tentativa DESC`,
        [userId]
    );
    return { message: "Success", data: rows };
}

module.exports = {
    Get, GetById, Post, Put, Delete,
    IniciarTentativa, FinalizarTentativa, GetTentativasPorUsuario
};
