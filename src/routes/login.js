const express = require('express');
const tokenGenerator = require('../helpers/tokenGenerator');
const { emailValidation, passwordValidation } = require('../middleware/loginValidation');

const routerLogin = express.Router();

routerLogin.post('/', emailValidation, passwordValidation, (_req, res) => {
  const token = tokenGenerator();
  res.status(200).send({ token });
});

module.exports = routerLogin;
