const acompanhamentoModel = require("../model/acompanhamentoModel");

async function GetByUser(req, res) {
    const userId = req.params.userId || 1;
    return acompanhamentoModel.GetByUser(userId);
}

async function UpdateActivity(req, res) {
    const userId = req.params.userId || 1;
    const activityId = req.params.activityId;
    return acompanhamentoModel.UpdateActivity(userId, activityId, req.body);
}

module.exports = { GetByUser, UpdateActivity };
