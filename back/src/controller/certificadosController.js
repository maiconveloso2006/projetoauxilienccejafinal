const certificadosModel = require("../model/certificadosModel");

async function GetByUsuario(req, res) {
    return certificadosModel.GetByUsuario(req.params.userId);
}

async function Post(req, res) {
    const result = await certificadosModel.Post(req.params.userId, req.body);
    return { status: 201, body: result };
}

async function Delete(req, res) {
    return certificadosModel.Delete(req.params.id);
}

module.exports = { GetByUsuario, Post, Delete };
