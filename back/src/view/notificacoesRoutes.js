const Routes = require("express");
const controller = require("../controller/notificacoesController");

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

// GET    /api/usuarios/:userId/notificacoes
routes.get(`${ep}/:userId/notificacoes`, handle(controller.GetByUsuario));

// POST   /api/usuarios/:userId/notificacoes
routes.post(`${ep}/:userId/notificacoes`, handle(controller.Post));

// PUT    /api/usuarios/:userId/notificacoes/:id/lida
routes.put(`${ep}/:userId/notificacoes/:id/lida`, handle(controller.MarcarLida));

// PUT    /api/usuarios/:userId/notificacoes/lidas
routes.put(`${ep}/:userId/notificacoes/lidas`, handle(controller.MarcarTodasLidas));

// DELETE /api/usuarios/:userId/notificacoes/:id
routes.delete(`${ep}/:userId/notificacoes/:id`, handle(controller.Delete));

module.exports = routes;
