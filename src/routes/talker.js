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

module.exports = routerTalker;
