const Routes = require("express");
const controller = require("../controller/acompanhamentoController");

const routes = Routes();

async function getAcompanhamento(req, res) {
    try {
        const responseData = await controller.GetByUser(req, res);
        res.status(200).json(responseData);
    } catch (err) {
        res.status(500).json({ message: err.message || "Erro ao carregar acompanhamento." });
    }
}

async function updateAtividade(req, res) {
    try {
        const responseData = await controller.UpdateActivity(req, res);
        res.status(200).json(responseData);
    } catch (err) {
        res.status(500).json({ message: err.message || "Erro ao atualizar atividade." });
    }
}

routes.get("/api/acompanhamento/:userId", getAcompanhamento);
routes.put("/api/acompanhamento/:userId/atividades/:activityId", updateAtividade);
routes.get("/acompanhamento/:userId", getAcompanhamento);
routes.put("/acompanhamento/:userId/atividades/:activityId", updateAtividade);

module.exports = routes;
