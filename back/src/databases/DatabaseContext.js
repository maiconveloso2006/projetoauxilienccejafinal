const { pool } = require("./connectionMysql.js");
const { MySQLStrategy } = require("./DatabaseStrategy.js");
const { DatabaseSchema } = require("./databaseSchema.js");

// O projeto utiliza MySQL/MariaDB como banco principal.
// Não carregamos sqlite3 aqui para evitar que o backend dependa do
// módulo nativo SQLite no ambiente local.
class DatabaseContext {
    constructor() {
        this.strategy = new MySQLStrategy(pool);
    }

    async init() {
        if (this._initialized) return;

        console.log("Verificando conexão com o MySQL...");
        await pool.query("SELECT 1");

        // Cria apenas as tabelas que ainda não existirem.
        await DatabaseSchema.initializeMySQL(this.strategy);

        this._initialized = true;
        console.log("Conectado ao MySQL/MariaDB.");
    }

    async execute(query, params) {
        if (!this._initialized) {
            await this.init();
        }
        return await this.strategy.execute(query, params);
    }
}

const db = new DatabaseContext();

module.exports = { db };
