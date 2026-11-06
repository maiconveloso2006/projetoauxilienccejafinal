const Routes = require("express");
const controller = require("../controller/certificadosController");

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

// GET    /api/usuarios/:userId/certificados
routes.get(`${ep}/:userId/certificados`, handle(controller.GetByUsuario));

// POST   /api/usuarios/:userId/certificados
routes.post(`${ep}/:userId/certificados`, handle(controller.Post));

// DELETE /api/usuarios/:userId/certificados/:id
routes.delete(`${ep}/:userId/certificados/:id`, handle(controller.Delete));

module.exports = routes;
