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

// ── Questões ──────────────────────────────────────────────────────────────────

async function Get(filtros) {
    const conditions = [];
    const values = [];

    if (filtros && filtros.id_materia) {
        conditions.push("q.id_materia = ?");
        values.push(filtros.id_materia);
    }
    if (filtros && filtros.nivel) {
        conditions.push("q.nivel = ?");
        values.push(filtros.nivel);
    }
    if (filtros && filtros.ativa !== undefined) {
        conditions.push("q.ativa = ?");
        values.push(filtros.ativa ? 1 : 0);
    }

    const where = conditions.length ? `WHERE ${conditions.join(" AND ")}` : "";
    const sql = `SELECT q.*, m.nome_materia
                 FROM questoes q
                 LEFT JOIN materias m ON m.id_materia = q.id_materia
                 ${where}
                 ORDER BY q.id_questao`;
    const rows = await query(sql, values);
    return { message: "Success", data: rows };
}

async function GetById(id) {
    const questao = first(await query(
        `SELECT q.*, m.nome_materia FROM questoes q
         LEFT JOIN materias m ON m.id_materia = q.id_materia
         WHERE q.id_questao = ?`, [id]
    ));
    if (!questao) return { message: "Error", data: "Questão não encontrada." };

    const alternativas = await query(
        `SELECT * FROM alternativas WHERE id_questao = ? ORDER BY id_alternativa`, [id]
    );
    return { message: "Success", data: { ...questao, alternativas } };
}

async function Post(payload) {
    if (!payload) return { message: "Error", data: "Dados não informados!" };
    const { id_materia, enunciado, nivel, explicacao, alternativas } = payload;

    if (!id_materia || !enunciado) {
        return { message: "Error", data: "id_materia e enunciado são obrigatórios." };
    }

    const result = await run(
        `INSERT INTO questoes (id_materia, enunciado, nivel, explicacao) VALUES (?, ?, ?, ?)`,
        [id_materia, enunciado, nivel || "MEDIO", explicacao || null]
    );
    const idQuestao = result.insertId;

    if (Array.isArray(alternativas) && alternativas.length) {
        for (const alt of alternativas) {
            await run(
                `INSERT INTO alternativas (id_questao, texto, correta) VALUES (?, ?, ?)`,
                [idQuestao, alt.texto, alt.correta ? 1 : 0]
            );
        }
    }

    return { message: "Success", data: { insertId: idQuestao } };
}

async function Put(payload, id) {
    if (!payload) return { message: "Error", data: "Dados não informados!" };
    const { enunciado, nivel, explicacao, ativa } = payload;
    const result = await run(
        `UPDATE questoes SET enunciado = COALESCE(?, enunciado),
                             nivel = COALESCE(?, nivel),
                             explicacao = COALESCE(?, explicacao),
                             ativa = COALESCE(?, ativa)
         WHERE id_questao = ?`,
        [enunciado || null, nivel || null, explicacao || null,
         ativa !== undefined ? (ativa ? 1 : 0) : null, id]
    );
    return { message: "Success", data: result };
}

async function Delete(id) {
    await run(`DELETE FROM alternativas WHERE id_questao = ?`, [id]);
    const result = await run(`DELETE FROM questoes WHERE id_questao = ?`, [id]);
    return { message: "Success", data: result };
}

// ── Alternativas ──────────────────────────────────────────────────────────────

async function GetAlternativas(idQuestao) {
    const rows = await query(
        `SELECT * FROM alternativas WHERE id_questao = ? ORDER BY id_alternativa`, [idQuestao]
    );
    return { message: "Success", data: rows };
}

async function PostAlternativa(idQuestao, payload) {
    if (!payload || !payload.texto) return { message: "Error", data: "Texto da alternativa é obrigatório." };
    const result = await run(
        `INSERT INTO alternativas (id_questao, texto, correta) VALUES (?, ?, ?)`,
        [idQuestao, payload.texto, payload.correta ? 1 : 0]
    );
    return { message: "Success", data: result };
}

async function DeleteAlternativa(id) {
    const result = await run(`DELETE FROM alternativas WHERE id_alternativa = ?`, [id]);
    return { message: "Success", data: result };
}

// ── Resposta do usuário ───────────────────────────────────────────────────────

async function ResponderQuestao(userId, idQuestao, idAlternativa) {
    const alternativa = first(await query(
        `SELECT correta FROM alternativas WHERE id_alternativa = ? AND id_questao = ?`,
        [idAlternativa, idQuestao]
    ));
    if (!alternativa) return { message: "Error", data: "Alternativa não encontrada." };

    const correta = alternativa.correta === 1 || alternativa.correta === true ? 1 : 0;
    await run(
        `INSERT INTO respostas_usuario (id_usuario, id_questao, id_alternativa, correta, respondida_em)
         VALUES (?, ?, ?, ?, ?)`,
        [userId, idQuestao, idAlternativa, correta, new Date().toISOString()]
    );

    // Atualiza progresso_estudos
    const questao = first(await query(`SELECT id_materia FROM questoes WHERE id_questao = ?`, [idQuestao]));
    if (questao) {
        const progresso = first(await query(
            `SELECT * FROM progresso_estudos WHERE id_usuario = ? AND id_materia = ?`,
            [userId, questao.id_materia]
        ));
        if (progresso) {
            await run(
                `UPDATE progresso_estudos
                 SET questoes_respondidas = questoes_respondidas + 1,
                     acertos = acertos + ?,
                     erros = erros + ?
                 WHERE id_usuario = ? AND id_materia = ?`,
                [correta, correta ? 0 : 1, userId, questao.id_materia]
            );
        } else {
            await run(
                `INSERT INTO progresso_estudos (id_usuario, id_materia, questoes_respondidas, acertos, erros)
                 VALUES (?, ?, 1, ?, ?)`,
                [userId, questao.id_materia, correta, correta ? 0 : 1]
            );
        }
    }

    return { message: "Success", data: { correta: correta === 1 } };
}

module.exports = {
    Get, GetById, Post, Put, Delete,
    GetAlternativas, PostAlternativa, DeleteAlternativa,
    ResponderQuestao
};
