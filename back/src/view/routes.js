// switch das rotas
const Routes = require("express");

// ── Rotas legadas da API ────────────────────────────────────────────────────
const usersRoutes        = require("./usersRoutes");
const logradourosRoutes  = require("./logradourosroutes");
const bairrosRoutes      = require("./bairrosroutes");
const municipiosRoutes   = require("./municipiosRoutes");
const estadosRoutes      = require("./estadosroutes");
const tarefasRoutes      = require("./tarefasroutes");
const mensagensRoutes    = require("./mensagensRoutes");
const acompanhamentoRoutes = require("./acompanhamentoRoutes");

// ── Rotas do banco auxilioencceja ───────────────────────────────────────────
const usuariosRoutes       = require("./usuariosRoutes");
const materiasRoutes       = require("./materiasRoutes");
const questoesRoutes       = require("./questoesRoutes");
const simuladosRoutes      = require("./simuladosRoutes");
const notificacoesRoutes   = require("./notificacoesRoutes");
const rankingRoutes        = require("./rankingRoutes");
const configuracoesRoutes  = require("./configuracoesRoutes");
const certificadosRoutes   = require("./certificadosRoutes");
const conquistasRoutes     = require("./conquistasRoutes");

const routes = Routes();

// Legadas
routes.use(usersRoutes);
routes.use(logradourosRoutes);
routes.use(bairrosRoutes);
routes.use(municipiosRoutes);
routes.use(estadosRoutes);
routes.use(tarefasRoutes);
routes.use(mensagensRoutes);
routes.use(acompanhamentoRoutes);

// auxilioencceja
routes.use(usuariosRoutes);
routes.use(materiasRoutes);
routes.use(questoesRoutes);
routes.use(simuladosRoutes);
routes.use(notificacoesRoutes);
routes.use(rankingRoutes);
routes.use(configuracoesRoutes);
routes.use(certificadosRoutes);
routes.use(conquistasRoutes);

routes.get("/test", (req, res) => {
    res.status(200).json({ message: "servidor Rodando ..." });
});

module.exports = routes;
