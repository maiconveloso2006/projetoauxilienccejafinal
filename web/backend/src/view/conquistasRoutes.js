const Routes = require("express");
const controller = require("../controller/conquistasController");

const routes = Routes();

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

// Catálogo de conquistas
// GET    /api/conquistas
routes.get("/api/conquistas", handle(controller.Get));

// GET    /api/conquistas/:id
routes.get("/api/conquistas/:id", handle(controller.GetById));

// POST   /api/conquistas
routes.post("/api/conquistas", handle(controller.Post));

// DELETE /api/conquistas/:id
routes.delete("/api/conquistas/:id", handle(controller.Delete));

// Conquistas por usuário
// GET    /api/usuarios/:userId/conquistas
routes.get("/api/usuarios/:userId/conquistas", handle(controller.GetByUsuario));

// POST   /api/usuarios/:userId/conquistas   body: { idConquista }
routes.post("/api/usuarios/:userId/conquistas", handle(controller.Conceder));

module.exports = routes;
