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

async function GetByUsuario(userId) {
    let config = first(await query(
        `SELECT * FROM configuracoes_usuario WHERE id_usuario = ?`, [userId]
    ));

    // Cria configuração padrão se não existir
    if (!config) {
        await run(
            `INSERT INTO configuracoes_usuario (id_usuario) VALUES (?)`, [userId]
        );
        config = first(await query(
            `SELECT * FROM configuracoes_usuario WHERE id_usuario = ?`, [userId]
        ));
    }

    return { message: "Success", data: config };
}

async function Put(userId, payload) {
    if (!payload) return { message: "Error", data: "Dados não informados!" };

    const fields = [];
    const values = [];

    const allowed = ["tema", "notificacoes_email", "notificacoes_push",
                     "acessibilidade", "autenticacao_2f"];

    for (const key of allowed) {
        if (payload[key] !== undefined) {
            fields.push(`${key} = ?`);
            values.push(payload[key]);
        }
    }

    if (!fields.length) return { message: "Error", data: "Nenhum campo para atualizar." };

    // Garante que o registro existe
    await GetByUsuario(userId);

    values.push(userId);
    const sql = `UPDATE configuracoes_usuario SET ${fields.join(", ")} WHERE id_usuario = ?`;
    const result = await run(sql, values);
    return { message: "Success", data: result };
}

module.exports = { GetByUsuario, Put };
