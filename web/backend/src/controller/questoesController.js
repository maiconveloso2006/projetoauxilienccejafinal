const questoesModel = require("../model/questoesModel");

async function Get(req, res) {
    const filtros = {};
    if (req.query.id_materia) filtros.id_materia = req.query.id_materia;
    if (req.query.nivel) filtros.nivel = req.query.nivel;
    if (req.query.ativa !== undefined) filtros.ativa = req.query.ativa !== "0";
    return questoesModel.Get(filtros);
}

async function GetById(req, res) {
    return questoesModel.GetById(req.params.id);
}

async function Post(req, res) {
    const payload = req.body;
    if (!payload || !payload.id_materia || !payload.enunciado) {
        return { status: 400, body: { message: "id_materia e enunciado são obrigatórios." } };
    }
    const result = await questoesModel.Post(payload);
    return { status: 201, body: result };
}

async function Put(req, res) {
    return questoesModel.Put(req.body, req.params.id);
}

async function Delete(req, res) {
    return questoesModel.Delete(req.params.id);
}

// Alternativas
async function GetAlternativas(req, res) {
    return questoesModel.GetAlternativas(req.params.id);
}

async function PostAlternativa(req, res) {
    return questoesModel.PostAlternativa(req.params.id, req.body);
}

async function DeleteAlternativa(req, res) {
    return questoesModel.DeleteAlternativa(req.params.altId);
}

// Resposta do usuário
async function Responder(req, res) {
    const { userId, idAlternativa } = req.body;
    if (!userId || !idAlternativa) {
        return { status: 400, body: { message: "userId e idAlternativa são obrigatórios." } };
    }
    return questoesModel.ResponderQuestao(userId, req.params.id, idAlternativa);
}

module.exports = { Get, GetById, Post, Put, Delete, GetAlternativas, PostAlternativa, DeleteAlternativa, Responder };
