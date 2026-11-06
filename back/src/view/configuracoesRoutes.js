const Routes = require("express");
const controller = require("../controller/configuracoesController");

const routes = Routes();
const ep = "/api/usuarios";

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

// GET /api/usuarios/:userId/configuracoes
routes.get(`${ep}/:userId/configuracoes`, handle(controller.GetByUsuario));

// PUT /api/usuarios/:userId/configuracoes
routes.put(`${ep}/:userId/configuracoes`, handle(controller.Put));

module.exports = routes;
