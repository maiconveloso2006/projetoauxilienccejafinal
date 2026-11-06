const sqlite3 = require('sqlite3');
const { open } = require('sqlite');
const path = require('path');

const getDbConnection = async () => {
    // Arquivo SQLite fica dentro da pasta backend/
    const backendDir = path.resolve(__dirname, '..', '..');
    const dbFile = process.env.SQLITE_DB_PATH || 'auxilioencceja.sqlite';

    // Se for caminho absoluto, usa direto; caso contrário, resolve relativo ao backend/
    const filename = path.isAbsolute(dbFile)
        ? dbFile
        : path.join(backendDir, dbFile);

    return open({
        filename,
        driver: sqlite3.Database
    });
};

module.exports = { getDbConnection };
