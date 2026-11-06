const notificacoesModel = require("../model/notificacoesModel");

async function GetByUsuario(req, res) {
    return notificacoesModel.GetByUsuario(req.params.userId);
}

async function Post(req, res) {
    const result = await notificacoesModel.Post(req.params.userId, req.body);
    return { status: 201, body: result };
}

async function MarcarLida(req, res) {
    return notificacoesModel.MarcarLida(req.params.id, req.params.userId);
}

async function MarcarTodasLidas(req, res) {
    return notificacoesModel.MarcarTodasLidas(req.params.userId);
}

async function Delete(req, res) {
    return notificacoesModel.Delete(req.params.id, req.params.userId);
}

module.exports = { GetByUsuario, Post, MarcarLida, MarcarTodasLidas, Delete };
