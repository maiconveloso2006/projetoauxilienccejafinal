const progressoModel = require('../model/progressoModel');

async function PostEvento(req, res) {
    const userId = req.params.userId;
    return progressoModel.registrarEvento(userId, req.body || {});
}

async function Get(req, res) {
    return progressoModel.getProgress(req.params.userId);
}

module.exports = { PostEvento, Get };
