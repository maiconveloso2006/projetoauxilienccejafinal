const conquistasModel = require("../model/conquistasModel");

async function Get(req, res) {
    return conquistasModel.Get();
}

async function GetById(req, res) {
    return conquistasModel.GetById(req.params.id);
}

async function Post(req, res) {
    const result = await conquistasModel.Post(req.body);
    return { status: 201, body: result };
}

async function Delete(req, res) {
    return conquistasModel.Delete(req.params.id);
}

async function GetByUsuario(req, res) {
    return conquistasModel.GetByUsuario(req.params.userId);
}

async function Conceder(req, res) {
    const { idConquista } = req.body;
    if (!idConquista) {
        return { status: 400, body: { message: "idConquista é obrigatório." } };
    }
    return conquistasModel.Conceder(req.params.userId, idConquista);
}

module.exports = { Get, GetById, Post, Delete, GetByUsuario, Conceder };
