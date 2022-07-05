const tokenGnerator = () => {
  let token = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*';

  for (let i = 0; i < 16; i += 1) {
    token += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return token;
};

tokenGnerator();

module.exports = tokenGnerator;
