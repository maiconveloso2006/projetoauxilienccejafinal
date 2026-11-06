const materiasModel = require("../model/materiasModel");

async function Get(req, res) {
    const { userId } = req.query;
    if (userId) {
        return materiasModel.GetComProgresso(userId);
    }
    return materiasModel.Get();
}

async function GetById(req, res) {
    return materiasModel.GetById(req.params.id);
}

async function GetComProgresso(req, res) {
    return materiasModel.GetComProgresso(req.params.userId);
}

async function Post(req, res) {
    const payload = req.body;
    if (!payload || !payload.nome_materia) {
        return { status: 400, body: { message: "nome_materia é obrigatório." } };
    }
    const result = await materiasModel.Post(payload);
    return { status: 201, body: result };
}

async function Put(req, res) {
    return materiasModel.Put(req.body, req.params.id);
}

async function Delete(req, res) {
    return materiasModel.Delete(req.params.id);
}

module.exports = { Get, GetById, GetComProgresso, Post, Put, Delete };
