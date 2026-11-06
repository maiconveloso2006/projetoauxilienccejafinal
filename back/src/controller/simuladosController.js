const simuladosModel = require("../model/simuladosModel");

async function Get(req, res) {
    return simuladosModel.Get();
}

async function GetById(req, res) {
    return simuladosModel.GetById(req.params.id);
}

async function Post(req, res) {
    const payload = req.body;
    if (!payload || !payload.titulo) {
        return { status: 400, body: { message: "titulo é obrigatório." } };
    }
    const result = await simuladosModel.Post(payload);
    return { status: 201, body: result };
}

async function Put(req, res) {
    return simuladosModel.Put(req.body, req.params.id);
}

async function Delete(req, res) {
    return simuladosModel.Delete(req.params.id);
}

async function IniciarTentativa(req, res) {
    const { userId } = req.body;
    if (!userId) return { status: 400, body: { message: "userId é obrigatório." } };
    return simuladosModel.IniciarTentativa(userId, req.params.id);
}

async function FinalizarTentativa(req, res) {
    return simuladosModel.FinalizarTentativa(req.params.tentativaId, req.body);
}

async function GetTentativas(req, res) {
    const { userId } = req.query;
    if (!userId) return { status: 400, body: { message: "userId é obrigatório." } };
    return simuladosModel.GetTentativasPorUsuario(userId);
}

module.exports = { Get, GetById, Post, Put, Delete, IniciarTentativa, FinalizarTentativa, GetTentativas };
