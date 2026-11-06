const Routes = require("express");
const controller = require("../controller/simuladosController");

const routes = Routes();
const ep = "/api/simulados";

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

// CRUD simulados
routes.get(ep, handle(controller.Get));
routes.get(`${ep}/:id`, handle(controller.GetById));
routes.post(ep, handle(controller.Post));
routes.put(`${ep}/:id`, handle(controller.Put));
routes.delete(`${ep}/:id`, handle(controller.Delete));

// Tentativas
routes.post(`${ep}/:id/tentativas`, handle(controller.IniciarTentativa));
routes.put(`${ep}/tentativas/:tentativaId`, handle(controller.FinalizarTentativa));
routes.get(`/api/tentativas`, handle(controller.GetTentativas));  // ?userId=x

module.exports = routes;
