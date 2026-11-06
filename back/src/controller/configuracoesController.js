const configuracoesModel = require("../model/configuracoesModel");

async function GetByUsuario(req, res) {
    return configuracoesModel.GetByUsuario(req.params.userId);
}

async function Put(req, res) {
    return configuracoesModel.Put(req.params.userId, req.body);
}

module.exports = { GetByUsuario, Put };
