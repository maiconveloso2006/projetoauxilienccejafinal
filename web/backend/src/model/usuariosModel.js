const { db } = require("../databases/DatabaseContext.js");

const tableName = "usuarios";

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

async function Get() {
    const sql = `SELECT id_usuario, nome, email, cpf, data_nascimento, foto_perfil,
                        nivel, pontos_xp, dias_ativos, progresso_geral, matricula,
                        status_conta, criado_em
                 FROM ${tableName} ORDER BY id_usuario`;
    const rows = await query(sql);
    return { message: "Success", data: rows };
}

async function GetById(id) {
    const sql = `SELECT id_usuario, nome, email, cpf, data_nascimento, foto_perfil,
                        nivel, pontos_xp, dias_ativos, progresso_geral, matricula,
                        status_conta, criado_em
                 FROM ${tableName} WHERE id_usuario = ?`;
    const rows = await query(sql, [id]);
    return { message: "Success", data: rows };
}

async function GetByEmail(email) {
    const sql = `SELECT * FROM ${tableName} WHERE email = ?`;
    return first(await query(sql, [email]));
}

async function Post(payload) {
    if (!payload) return { message: "Error", data: "Dados não informados!" };

    const { nome, email, senha, cpf, data_nascimento, nivel, matricula } = payload;
    const sql = `INSERT INTO ${tableName} (nome, email, senha, cpf, data_nascimento, nivel, matricula)
                 VALUES (?, ?, ?, ?, ?, ?, ?)`;
    const result = await run(sql, [
        nome, email, senha,
        cpf || null,
        data_nascimento || null,
        nivel || "Básico",
        matricula || null
    ]);
    return { message: "Success", data: result };
}

async function Put(payload, id) {
    if (!payload) return { message: "Error", data: "Dados não informados!" };

    const fields = [];
    const values = [];

    const allowed = ["nome", "email", "senha", "cpf", "data_nascimento",
                     "foto_perfil", "nivel", "pontos_xp", "dias_ativos",
                     "progresso_geral", "matricula", "status_conta"];

    for (const key of allowed) {
        if (payload[key] !== undefined) {
            fields.push(`${key} = ?`);
            values.push(payload[key]);
        }
    }

    if (!fields.length) return { message: "Error", data: "Nenhum campo para atualizar." };

    values.push(id);
    const sql = `UPDATE ${tableName} SET ${fields.join(", ")} WHERE id_usuario = ?`;
    const result = await run(sql, values);
    return { message: "Success", data: result };
}

async function Delete(id) {
    const sql = `DELETE FROM ${tableName} WHERE id_usuario = ?`;
    const result = await run(sql, [id]);
    return { message: "Success", data: result };
}

async function GetRanking(userId) {
    const sql = `SELECT r.pontos, r.posicao FROM ranking_usuarios r WHERE r.id_usuario = ?`;
    return first(await query(sql, [userId]));
}

module.exports = { Get, GetById, GetByEmail, Post, Put, Delete, GetRanking };
