const Routes = require("express");
const controller = require("../controller/questoesController");

const routes = Routes();
const ep = "/api/questoes";

function handle(fn) {
    return async (req, res) => {
        try {
            const result = await fn(req, res);
            if (result && result.status && result.body) {
                return res.status(result.status).json(result.body);
            }
            res.status(200).json(result);
        } catch (err) {
            res.status(500).json({ message: err.message || "Erro interno." });
        }
    };
}

// CRUD questões
routes.get(ep, handle(controller.Get));
routes.get(`${ep}/:id`, handle(controller.GetById));
routes.post(ep, handle(controller.Post));
routes.put(`${ep}/:id`, handle(controller.Put));
routes.delete(`${ep}/:id`, handle(controller.Delete));

// Alternativas por questão
routes.get(`${ep}/:id/alternativas`, handle(controller.GetAlternativas));
routes.post(`${ep}/:id/alternativas`, handle(controller.PostAlternativa));
routes.delete(`${ep}/:id/alternativas/:altId`, handle(controller.DeleteAlternativa));

// Responder questão
routes.post(`${ep}/:id/responder`, handle(controller.Responder));

module.exports = routes;
