const express = require('express');
const { readContentFile, writeContentFile } = require('../helpers/readWriteFile');
const {
  tokenValidation,
  nameValidation,
  ageValidation,
  talkValidation,
  watchedAtValidation,
  rateValidation,
} = require('../middleware/talkerValidation');

const routerTalker = express.Router();

routerTalker.get('/', async (_req, res) => {
  const talkers = await readContentFile();

  if (!talkers || talkers === undefined) {
    res.status(200).json(JSON.parse([]));
  }

  res.status(200).json(talkers);
});

routerTalker.get('/:id', async (req, res) => {
  const { id } = req.params;
  const talkers = await readContentFile();

  const talker = talkers.find((index) => index.id === Number(id));

  if (!talker || talker === undefined) {
    res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  }

  res.status(200).json(talker);
});

routerTalker.post('/',
  tokenValidation,
  nameValidation,
  ageValidation,
  talkValidation,
  watchedAtValidation,
  rateValidation,
  async (req, res) => {
  const { name, age, talk } = req.body;
  const talkers = await readContentFile();

  const newTalker = {
    name,
    age,
    id: talkers.length + 1,
    talk,
  };

  await writeContentFile([...talkers, newTalker]);
  return res.status(201).json(newTalker);
});

module.exports = routerTalker;
