const { Contato } = require('../models');

module.exports = (server) => {
  server.post('/contatos', async (req, res, next) => {
    try {
      const contato = await Contato.create(req.body);
      res.send(201, contato);
    } catch (err) {
      res.send(400, { error: err.message });
    }
    next();
  });

  server.get('/contatos', async (req, res, next) => {
    const contatos = await Contato.findAll();
    res.send(contatos);
    next();
  });

  server.get('/contatos/:id', async (req, res, next) => {
    const contato = await Contato.findByPk(req.params.id);
    if (contato) {
      res.send(contato);
    } else {
      res.send(404, { error: 'Contato não encontrado' });
    }
    next();
  });

  server.put('/contatos/:id', async (req, res, next) => {
    const contato = await Contato.findByPk(req.params.id);
    if (contato) {
      try {
        await contato.update(req.body);
        res.send(contato);
      } catch (err) {
        res.send(400, { error: err.message });
      }
    } else {
      res.send(404, { error: 'Contato não encontrado' });
    }
    next();
  });

  server.del('/contatos/:id', async (req, res, next) => {
    const contato = await Contato.findByPk(req.params.id);
    if (contato) {
      await contato.destroy();
      res.send(204);
    } else {
      res.send(404, { error: 'Contato não encontrado' });
    }
    next();
  });
};