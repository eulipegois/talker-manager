const express = require('express');
const getTalkers = require('../helpers/getTalkers');

const routerTalker = express.Router();

routerTalker.get('/', async (_req, res) => {
  const talkers = await getTalkers();

  if (!talkers || talkers === undefined) {
    res.status(200).json(JSON.parse([]));
  }

  res.status(200).json(talkers);
});

routerTalker.get('/:id', async (req, res) => {
  const { id } = req.params;
  const talkers = await getTalkers();

  const talker = talkers.find((index) => index.id === Number(id));

  if (!talker || talker === undefined) {
    res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  }

  res.status(200).json(talker);
});

module.exports = routerTalker;
