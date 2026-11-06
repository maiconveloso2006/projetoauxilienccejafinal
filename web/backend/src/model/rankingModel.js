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

async function GetRanking(limite) {
    const limit = parseInt(limite) || 10;
    const rows = await query(
        `SELECT u.id_usuario, u.nome, u.foto_perfil, u.nivel,
                r.pontos, r.posicao
         FROM ranking_usuarios r
         JOIN usuarios u ON u.id_usuario = r.id_usuario
         ORDER BY r.pontos DESC
         LIMIT ?`,
        [limit]
    );
    return { message: "Success", data: rows };
}

async function GetPosicaoUsuario(userId) {
    const row = first(await query(
        `SELECT r.pontos, r.posicao, u.nome, u.nivel, u.foto_perfil
         FROM ranking_usuarios r
         JOIN usuarios u ON u.id_usuario = r.id_usuario
         WHERE r.id_usuario = ?`,
        [userId]
    ));
    return { message: "Success", data: row || null };
}

async function AdicionarPontos(userId, pontos) {
    // Garante registro no ranking
    const existe = first(await query(
        `SELECT id FROM ranking_usuarios WHERE id_usuario = ?`, [userId]
    ));

    if (existe) {
        await run(
            `UPDATE ranking_usuarios SET pontos = pontos + ? WHERE id_usuario = ?`,
            [pontos, userId]
        );
    } else {
        await run(
            `INSERT INTO ranking_usuarios (id_usuario, pontos) VALUES (?, ?)`,
            [userId, pontos]
        );
    }

    // Também atualiza pontos_xp na tabela usuarios
    await run(
        `UPDATE usuarios SET pontos_xp = pontos_xp + ? WHERE id_usuario = ?`,
        [pontos, userId]
    );

    // Recalcula posições
    await RecalcularPosicoes();

    return GetPosicaoUsuario(userId);
}

async function RecalcularPosicoes() {
    const rows = await query(
        `SELECT id FROM ranking_usuarios ORDER BY pontos DESC`
    );
    for (let i = 0; i < rows.length; i++) {
        await run(
            `UPDATE ranking_usuarios SET posicao = ? WHERE id = ?`,
            [i + 1, rows[i].id]
        );
    }
}

module.exports = { GetRanking, GetPosicaoUsuario, AdicionarPontos };
