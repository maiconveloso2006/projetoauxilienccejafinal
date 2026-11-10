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

async function Login(req, res) {
    const { email, senha } = req.body || {};
    if (!email || !senha) {
        return { status: 400, body: { message: "E-mail e senha são obrigatórios." } };
    }

    const usuario = await usuariosModel.GetByEmail(email);
    if (!usuario || usuario.senha !== senha) {
        return { status: 401, body: { message: "E-mail ou senha inválidos." } };
    }

    // Não devolve a senha para o navegador.
    const { senha: _senha, ...usuarioSemSenha } = usuario;
    return { status: 200, body: { message: "Success", data: usuarioSemSenha } };
}

async function Put(req, res) {
    return usuariosModel.Put(req.body, req.params.id);
}

async function Delete(req, res) {
    return usuariosModel.Delete(req.params.id);
}

module.exports = { Get, GetById, GetByEmail: usuariosModel.GetByEmail, Login, Post, Put, Delete };
