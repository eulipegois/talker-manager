const fs = require('fs').promises;
const path = require('path');

const PERSONS_JSON_PATH = path.resolve(process.cwd(), 'talker.json');

const readContentFile = async () => {
  try {
    const content = await fs.readFile(PERSONS_JSON_PATH, 'utf-8');
    return JSON.parse(content);
  } catch (err) {
    console.log(err.message);
    return null;
  }
};

const writeContentFile = async (content) => {
  try {
    const contentFile = await readContentFile();
  
    contentFile.push(content);
  
    await fs.writeFile(PERSONS_JSON_PATH, JSON.stringify(contentFile));
  } catch (err) {
    console.log(err.message);
    return null;
  }
};

module.exports = {
  readContentFile,
  writeContentFile,
};
