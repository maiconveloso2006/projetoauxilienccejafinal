const usuariosModel = require("../model/usuariosModel");

async function Get(req, res) {
    return usuariosModel.Get();
}

async function GetById(req, res) {
    return usuariosModel.GetById(req.params.id);
}

async function Post(req, res) {
    const payload = req.body;
    if (!payload || !payload.nome || !payload.email || !payload.senha) {
        return { status: 400, body: { message: "nome, email e senha são obrigatórios." } };
    }

    const existing = await usuariosModel.GetByEmail(payload.email);
    if (existing) {
        return { status: 409, body: { message: "Já existe um usuário com este e-mail." } };
    }

    const result = await usuariosModel.Post(payload);
    return { status: 201, body: result };
}

async function Put(req, res) {
    return usuariosModel.Put(req.body, req.params.id);
}

async function Delete(req, res) {
    return usuariosModel.Delete(req.params.id);
}

module.exports = { Get, GetById, Post, Put, Delete };
