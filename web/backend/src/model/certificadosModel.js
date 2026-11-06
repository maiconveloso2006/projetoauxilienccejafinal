const { db } = require("../databases/DatabaseContext.js");

async function query(sql, params) {
    const [rows] = await db.execute(sql, params || []);
    return rows;
}

async function run(sql, params) {
    const [result] = await db.execute(sql, params || []);
    return result;
}

async function GetByUsuario(userId) {
    const rows = await query(
        `SELECT * FROM certificados WHERE id_usuario = ? ORDER BY emitido_em DESC`,
        [userId]
    );
    return { message: "Success", data: rows };
}

async function Post(userId, payload) {
    if (!payload || !payload.codigo) {
        return { message: "Error", data: "codigo é obrigatório." };
    }
    const result = await run(
        `INSERT INTO certificados (id_usuario, codigo, emitido_em) VALUES (?, ?, ?)`,
        [userId, payload.codigo, new Date().toISOString()]
    );
    return { message: "Success", data: result };
}

async function Delete(id) {
    const result = await run(
        `DELETE FROM certificados WHERE id_certificado = ?`,
        [id]
    );
    return { message: "Success", data: result };
}

module.exports = { GetByUsuario, Post, Delete };
