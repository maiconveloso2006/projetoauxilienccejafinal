const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");

dotenv.config();

const app = express();
const projectRoot = path.resolve(__dirname, '..', '..');

// ── Inicialização do banco ────────────────────────────────────────────────────
const { db } = require('./databases/DatabaseContext.js');
let dbInitialized = false;

async function ensureDbInit() {
    if (!dbInitialized) {
        console.log('Iniciando banco...');
        await db.init();
        dbInitialized = true;
        console.log('Banco inicializado.');
    }
}

// ── Middlewares globais ───────────────────────────────────────────────────────
app.use(express.json());
//app.use(cors({ origin: true }));
app.use(cors({ origin: "*" }));

// Garante que o banco está pronto antes de qualquer rota da API
app.use(async (req, res, next) => {
    try {
        await ensureDbInit();
        next();
    } catch (err) {
        console.error('Erro ao inicializar banco:', err);
        res.status(500).json({ message: 'Erro ao conectar ao banco de dados.' });
    }
});

// ── Rotas da API ──────────────────────────────────────────────────────────────
const routes = require("./view/routes");
app.use(routes);

// ── Arquivos estáticos (frontend) ─────────────────────────────────────────────
app.use(express.static(projectRoot));

app.use(
    '/uploads',
    express.static(path.resolve(__dirname, '..', 'uploads'))
);

// ── Upload de avatar ──────────────────────────────────────────────────────────
const uploads = require("./utils/upload.js");

app.post('/upload', uploads.single('avatar'), (req, res) => {
    if (!req.file) {
        res.status(400).json({ message: 'Erro ao fazer upload do arquivo!' });
    } else {
        res.json({ message: 'Arquivo enviado com sucesso!' });
    }
});

// ── Servidor local (não roda no Vercel) ───────────────────────────────────────
if (process.env.VERCEL !== '1') {
    const Port = process.env.PORT || process.env.API_PORT || 3600;
    ensureDbInit().then(() => {
        app.listen(Port, '0.0.0.0', () => {
            console.log(`Servidor rodando na porta: ${Port}`);
            console.log(`API:  http://localhost:${Port}/test`);
            console.log(`Site: http://localhost:${Port}/login.html`);
            console.log('Pressione CTRL+C para encerrar.');
        });
    }).catch(err => {
        console.error('Falha ao iniciar servidor:', err);
        process.exit(1);
    });
}

// Exporta o app para o Vercel (serverless)
module.exports = app;
