const { db } = require("../databases/DatabaseContext.js");

async function query(sql, params) {
    const [rows] = await db.execute(sql, params || []);
    return rows;
}

async function run(sql, params) {
    const [result] = await db.execute(sql, params || []);
    return result;
}

async function Get() {
    const sql = `SELECT * FROM materias ORDER BY id_materia`;
    const rows = await query(sql);
    return { message: "Success", data: rows };
}

async function GetById(id) {
    const sql = `SELECT * FROM materias WHERE id_materia = ?`;
    const rows = await query(sql, [id]);
    return { message: "Success", data: rows };
}

async function Post(payload) {
    if (!payload) return { message: "Error", data: "Dados não informados!" };
    const { nome_materia, descricao, icone } = payload;
    const sql = `INSERT INTO materias (nome_materia, descricao, icone) VALUES (?, ?, ?)`;
    const result = await run(sql, [nome_materia, descricao || null, icone || null]);
    return { message: "Success", data: result };
}

async function Put(payload, id) {
    if (!payload) return { message: "Error", data: "Dados não informados!" };
    const { nome_materia, descricao, icone } = payload;
    const sql = `UPDATE materias SET nome_materia = ?, descricao = ?, icone = ? WHERE id_materia = ?`;
    const result = await run(sql, [nome_materia, descricao || null, icone || null, id]);
    return { message: "Success", data: result };
}

async function Delete(id) {
    const sql = `DELETE FROM materias WHERE id_materia = ?`;
    const result = await run(sql, [id]);
    return { message: "Success", data: result };
}

// Retorna matérias com progresso de um usuário específico
async function GetComProgresso(userId) {
    const sql = `SELECT m.id_materia, m.nome_materia, m.descricao, m.icone,
                        COALESCE(pm.percentual, 0) AS percentual,
                        COALESCE(pm.media, 0) AS media,
                        COALESCE(pm.atividades_concluidas, 0) AS atividades_concluidas,
                        COALESCE(pm.atividades_pendentes, 0) AS atividades_pendentes
                 FROM materias m
                 LEFT JOIN progresso_materias pm
                        ON pm.id_materia = m.id_materia AND pm.id_usuario = ?
                 ORDER BY m.id_materia`;
    const rows = await query(sql, [userId]);
    return { message: "Success", data: rows };
}

module.exports = { Get, GetById, Post, Put, Delete, GetComProgresso };
