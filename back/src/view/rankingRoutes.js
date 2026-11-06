const Routes = require("express");
const controller = require("../controller/rankingController");

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

// GET  /api/ranking?limite=10
routes.get("/api/ranking", handle(controller.GetRanking));

// GET  /api/ranking/:userId
routes.get("/api/ranking/:userId", handle(controller.GetPosicaoUsuario));

// POST /api/ranking/:userId/pontos   body: { pontos: 50 }
routes.post("/api/ranking/:userId/pontos", handle(controller.AdicionarPontos));

module.exports = routes;
