const emailValidation = (req, res, next) => {
  const { email } = req.body;
  const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

  if (!email || email === undefined) {
      return res.status(400).json({
      message: 'O campo "email" é obrigatório',
    });
  }

  if (!(email).match(emailRegex)) {
    return res.status(400).json({
      message: 'O "email" deve ter o formato "email@email.com"',
    });
  }

  next();
};

const passwordValidation = (req, res, next) => {
  const { password } = req.body;

  if (!password || password === undefined) {
      return res.status(400).json({
      message: 'O campo "password" é obrigatório',
    });
  }

  if (password.length < 6) {
    return res.status(400).json({
      message: 'O "password" deve ter pelo menos 6 caracteres',
    });
  }

  next();
};

module.exports = {
  passwordValidation,
  emailValidation,
};