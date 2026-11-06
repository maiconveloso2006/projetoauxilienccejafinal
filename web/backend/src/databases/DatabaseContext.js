const { pool } = require("./connectionMysql.js");
const { getDbConnection } = require("./connectionSqllite.js");
const { MySQLStrategy, SQLiteStrategy } = require("./DatabaseStrategy.js");
const { DatabaseSchema } = require("./databaseSchema.js");

class DatabaseContext {
    constructor() {
        this.strategy = null;
    }

    async init() {
        if (process.env.DB_TYPE === 'sqlite') {
            const db = await getDbConnection();
            this.strategy = new SQLiteStrategy(db);

            // Cria todas as tabelas no SQLite se ainda não existirem
            await DatabaseSchema.initialize(this.strategy);

            console.log("Conectado ao SQLite.");
        } else {
            this.strategy = new MySQLStrategy(pool);

            // Inicializa o schema MySQL com as tabelas do auxilioencceja
            await DatabaseSchema.initializeMySQL(this.strategy);

            console.log("Conectado ao MySQL.");
        }
    }

    async execute(query, params) {
        return await this.strategy.execute(query, params);
    }
}

const db = new DatabaseContext();

module.exports = { db };
