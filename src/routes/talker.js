const express = require('express');
const path = require('path');
const fs = require('fs').promises;

// Cria roteamento
const routerTalker = express.Router();

// Busca o arquivo com a API na raiz do projeto
const PERSONS_JSON_PATH = path.resolve(process.cwd(), 'talker.json');

// Lista todos os Talkers
routerTalker.get('/', async (req, res) => {
  // Ler o arquivo JSON e salva as informações
  const data = JSON.parse(await fs.readFile(PERSONS_JSON_PATH, 'utf-8'));

  if (data.length < 1) {
    res.status(200).json([]);
  }

  res.status(200).json(data);
});

module.exports = routerTalker;
