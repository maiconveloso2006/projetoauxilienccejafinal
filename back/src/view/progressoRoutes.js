const Routes = require('express');
const controller = require('../controller/progressoController');

const routes = Routes();

routes.post('/api/progresso/:userId/evento', async (req, res) => {
    try {
        const result = await controller.PostEvento(req, res);
        res.status(201).json(result);
    } catch (err) {
        console.error('Erro ao registrar progresso:', err);
        res.status(500).json({ message: err.message || 'Erro ao registrar progresso.' });
    }
});

routes.get('/api/progresso/:userId', async (req, res) => {
    try {
        const result = await controller.Get(req, res);
        res.status(200).json(result);
    } catch (err) {
        console.error('Erro ao consultar progresso:', err);
        res.status(500).json({ message: err.message || 'Erro ao consultar progresso.' });
    }
});

module.exports = routes;
