const rankingModel = require("../model/rankingModel");

async function GetRanking(req, res) {
    const limite = req.query.limite || 10;
    return rankingModel.GetRanking(limite);
}

async function GetPosicaoUsuario(req, res) {
    return rankingModel.GetPosicaoUsuario(req.params.userId);
}

async function AdicionarPontos(req, res) {
    const { pontos } = req.body;
    if (!pontos || isNaN(pontos)) {
        return { status: 400, body: { message: "pontos deve ser um número válido." } };
    }
    return rankingModel.AdicionarPontos(req.params.userId, Number(pontos));
}

module.exports = { GetRanking, GetPosicaoUsuario, AdicionarPontos };
