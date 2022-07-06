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

routerTalker.get('/search', tokenValidation, async (req, res) => {
  const { q } = req.query;
  const talkers = await readContentFile();

  if (!q) return res.status(200).json(talkers);

  const talkerSelected = talkers
    .filter((talker) => talker.name.toLowerCase().includes(q.toLowerCase()));

  res.status(200).json(talkerSelected);
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

routerTalker.delete('/:id', tokenValidation, async (req, res) => {
  const { id } = req.params;
  const talkers = await readContentFile();

  const talkerSelected = talkers.findIndex((talker) => talker.id === Number(id));

  if (talkerSelected === -1) {
    return res.status(404).json({ message: 'ID não encontrado!' });
  }

  talkers.splice(talkerSelected, 1);

  await writeContentFile(talkers);
  res.status(204).json(talkers);
});

module.exports = routerTalker;
