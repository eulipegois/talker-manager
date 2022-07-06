const express = require('express');
const tokenGenerator = require('../helpers/tokenGenerator');
const emailValidate = require('../middleware/emailValidation');
const passwordValidate = require('../middleware/passwordValidation');

const routerLogin = express.Router();

routerLogin.post('/', emailValidate, passwordValidate, (_req, res) => {
  const token = tokenGenerator();
  res.status(200).send({ token });
});

module.exports = routerLogin;
