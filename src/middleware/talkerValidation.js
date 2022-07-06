const tokenValidation = (req, _res, next) => {
  const { authorization } = req.headers;

  if (!authorization || authorization === undefined) {
    return next({ status: 401, message: 'Token não encontrado' });
  }

  if (authorization.length !== 16) {
    return next({ status: 401, message: 'Token inválido' });
  }

  next();
};

const nameValidation = (req, _res, next) => {
  const { name } = req.body;

  if (!name || name === undefined) {
    return next({ status: 400, message: 'O campo "name" é obrigatório' });
  }

  if (name.length < 3) {
    return next({ status: 400, message: 'O "name" deve ter pelo menos 3 caracteres' });
  }

  next();
};

const ageValidation = (req, _res, next) => {
  const { age } = req.body;

  if (!age || age === undefined) {
    return next({ status: 400, message: 'O campo "age" é obrigatório' });
  }

  if (age < 18) {
    return next({ status: 400, message: 'A pessoa palestrante deve ser maior de idade' });
  }

  next();
};

const watchedAtValidation = (talk, next) => {
  const dataRegex = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/;

  if (!talk.watchedAt || talk.watchedAt === undefined) {
    return next({ status: 400, message: 'O campo "watchedAt" é obrigatório' });
  }

  if (!(talk.watchedAt).match(dataRegex)) {
    return next({ status: 400, message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
  }
};

const rateValidation = (talk, next) => {
  if (!talk.rate || talk.rate === undefined) {
    return next({ status: 400, message: 'O campo "rate" é obrigatório' });
  }

  if (talk.rate < 1 || talk.rate > 5) {
    return next({ status: 400, message: 'O campo "rate" deve ser um inteiro de 1 à 5' });
  }
};

const talkValidation = (req, _res, next) => {
  const { talk } = req.body;

  if (!talk || talk === undefined) {
    return next({ status: 400, message: 'O campo "talk" é obrigatório' });
  }

  watchedAtValidation(talk, next);
  rateValidation(talk, next);

  next();
};

module.exports = {
  tokenValidation,
  nameValidation,
  ageValidation,
  talkValidation,
};
