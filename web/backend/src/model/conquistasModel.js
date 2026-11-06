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

// ── Conquistas (catálogo) ──────────────────────────────────────────────────

async function Get() {
    const rows = await query(`SELECT * FROM conquistas ORDER BY id_conquista`);
    return { message: "Success", data: rows };
}

async function GetById(id) {
    const rows = await query(`SELECT * FROM conquistas WHERE id_conquista = ?`, [id]);
    return { message: "Success", data: rows };
}

async function Post(payload) {
    if (!payload || !payload.nome) {
        return { message: "Error", data: "nome é obrigatório." };
    }
    const result = await run(
        `INSERT INTO conquistas (nome, descricao, xp_recompensa) VALUES (?, ?, ?)`,
        [payload.nome, payload.descricao || null, payload.xp_recompensa || 0]
    );
    return { message: "Success", data: result };
}

async function Delete(id) {
    const result = await run(`DELETE FROM conquistas WHERE id_conquista = ?`, [id]);
    return { message: "Success", data: result };
}

// ── Conquistas do usuário ─────────────────────────────────────────────────

async function GetByUsuario(userId) {
    const rows = await query(
        `SELECT c.id_conquista, c.nome, c.descricao, c.xp_recompensa,
                uc.conquistado_em
         FROM usuario_conquistas uc
         JOIN conquistas c ON c.id_conquista = uc.id_conquista
         WHERE uc.id_usuario = ?
         ORDER BY uc.conquistado_em DESC`,
        [userId]
    );
    return { message: "Success", data: rows };
}

async function Conceder(userId, idConquista) {
    // Não concede duplicata
    const existente = first(await query(
        `SELECT id_usuario_conquista FROM usuario_conquistas
         WHERE id_usuario = ? AND id_conquista = ?`,
        [userId, idConquista]
    ));
    if (existente) {
        return { message: "Error", data: "Conquista já concedida a este usuário." };
    }

    const result = await run(
        `INSERT INTO usuario_conquistas (id_usuario, id_conquista) VALUES (?, ?)`,
        [userId, idConquista]
    );
    return { message: "Success", data: result };
}

module.exports = { Get, GetById, Post, Delete, GetByUsuario, Conceder };
