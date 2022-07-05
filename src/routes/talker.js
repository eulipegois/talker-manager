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

// Busca Talker pelo seu ID
routerTalker.get('/:id', async (req, res) => {
  // busca o id
  const id = Number(req.params.id);
  // Ler o arquivo JSON e salva as informações
  const data = JSON.parse(await fs.readFile(PERSONS_JSON_PATH, 'utf-8'));
  // Mapeia as informações em (data) e buscar se há um Talker com o mesmo ID do parametro na requisição, se não houver ele retorna -1.
  const result = data.findIndex((talker) => talker.id === id);

  // Caso retorne -1 não temos o id fornecido no parametro
  if (result < 0) return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });

  res.json(data[result]);
});

module.exports = routerTalker;
