const fs = require('fs').promises;
const path = require('path');

const getTalkers = async () => {
  try {
    const PERSONS_JSON_PATH = path.resolve(process.cwd(), 'talker.json');
    const readFile = await fs.readFile(PERSONS_JSON_PATH, 'utf-8');
    return JSON.parse(readFile);
  } catch (err) {
    console.log(`Erro: ${err.message}`);
  }
};

module.exports = getTalkers;
