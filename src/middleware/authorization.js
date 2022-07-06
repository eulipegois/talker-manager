module.exports = (req, _res, next) => {
  const { authorization } = req.headers;

  if (!authorization || authorization === undefined) {
    return next({ status: 401, message: 'Token não encontrado' });
  }

  next();
};
