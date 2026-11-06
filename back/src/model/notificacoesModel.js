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
        `SELECT * FROM notificacoes WHERE id_usuario = ? ORDER BY criada_em DESC`,
        [userId]
    );
    return { message: "Success", data: rows };
}

async function Post(userId, payload) {
    if (!payload || !payload.titulo || !payload.mensagem) {
        return { message: "Error", data: "titulo e mensagem são obrigatórios." };
    }
    const result = await run(
        `INSERT INTO notificacoes (id_usuario, titulo, mensagem, lida) VALUES (?, ?, ?, 0)`,
        [userId, payload.titulo, payload.mensagem]
    );
    return { message: "Success", data: result };
}

async function MarcarLida(idNotificacao, userId) {
    const result = await run(
        `UPDATE notificacoes SET lida = 1 WHERE id_notificacao = ? AND id_usuario = ?`,
        [idNotificacao, userId]
    );
    return { message: "Success", data: result };
}

async function MarcarTodasLidas(userId) {
    const result = await run(
        `UPDATE notificacoes SET lida = 1 WHERE id_usuario = ?`,
        [userId]
    );
    return { message: "Success", data: result };
}

async function Delete(idNotificacao, userId) {
    const result = await run(
        `DELETE FROM notificacoes WHERE id_notificacao = ? AND id_usuario = ?`,
        [idNotificacao, userId]
    );
    return { message: "Success", data: result };
}

module.exports = { GetByUsuario, Post, MarcarLida, MarcarTodasLidas, Delete };
