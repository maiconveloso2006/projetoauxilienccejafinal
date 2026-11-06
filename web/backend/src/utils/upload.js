const multer = require("multer");
const path = require("path");

// No Vercel (serverless) não há disco persistente, então usamos memória.
// Localmente, salva em disco na pasta uploads/.
const isVercel = process.env.VERCEL === '1';

const storage = isVercel
    ? multer.memoryStorage()
    : multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, path.resolve(__dirname, '..', '..', 'uploads'));
        },
        filename: function (req, file, cb) {
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
            cb(null, uniqueSuffix + '-' + file.originalname);
        }
    });

const uploads = multer({ storage });

module.exports = uploads;
