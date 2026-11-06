const myModel = require("../model/usersModel");
const { validateUserCreatePayload } = require("../utils/userValidation");

async function Get(req, res) {
    const responseData = await myModel.Get(req);
    return responseData;
}

async function GetById(req, res) {
    const id = req.params.id;
    const responseData = await myModel.GetById(id);
    return responseData;
}

async function Post(req, res) {
    const validation = validateUserCreatePayload(req.body);
    if (!validation.ok) {
        return { status: 400, body: { message: validation.message } };
    }

    const existing = await myModel.Get();
    const users = Array.isArray(existing && existing.data) ? existing.data : [];
    if (users.some(function (item) {
        return String(item.login || '').toLowerCase() === validation.data.login;
    })) {
        return { status: 409, body: { message: 'Já existe uma conta cadastrada com este e-mail.' } };
    }

    const responseData = await myModel.Post(validation.data);
    return { status: 201, body: responseData };
}

async function Put(req, res) {
    const id = req.params.id;
    const payload = req.body;
    const responseData = await myModel.Put(payload, id);
    return responseData;
}

async function Delete(req, res) {
    const id = req.params.id;
    const responseData = await myModel.Delete(id);
    return responseData;
}

module.exports = { Get, GetById, Post, Put, Delete };
