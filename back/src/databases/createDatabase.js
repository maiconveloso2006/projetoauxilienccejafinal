// Arquivo utilitário legado — mantido para compatibilidade
// A criação de tabelas agora é feita por DatabaseSchema.js
const { pool } = require("./connectionMysql");

async function createDb() {
    try {
        await pool.execute(
            'CREATE TABLE IF NOT EXISTS `municipios` ( id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, municipio VARCHAR(60) )'
        );
    } catch (error) {
        console.warn("createDb:", error.message);
    }
}

module.exports = { createDb };
