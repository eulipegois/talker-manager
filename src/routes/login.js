const express = require('express');
const tokenGenerator = require('../helpers/tokenGenerator');

const routerLogin = express.Router();

routerLogin.post('/', (_req, res) => {
  const token = tokenGenerator();
  res.status(200).send({ token });
});

module.exports = routerLogin;
