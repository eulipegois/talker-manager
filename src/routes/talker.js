const express = require('express');
const { readContentFile, writeContentFile } = require('../helpers/readWriteFile');
const {
  tokenValidation,
  nameValidation,
  ageValidation,
  talkValidation,
} = require('../middleware/talkerValidation');
const errorMiddleware = require('../middleware/errorMiddleware');

const routerTalker = express.Router();

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
  errorMiddleware,
  async (req, res) => {
  const data = (req.body);
  const talkers = await readContentFile();

  data.id = talkers.length + 1;

  await writeContentFile(data);
  return res.status(201).json(data);
});

routerTalker.get('/', async (_req, res) => {
  const talkers = await readContentFile();

  if (!talkers || talkers === undefined) {
    res.status(200).json(JSON.parse([]));
  }

  res.status(200).json(talkers);
});

module.exports = routerTalker;
