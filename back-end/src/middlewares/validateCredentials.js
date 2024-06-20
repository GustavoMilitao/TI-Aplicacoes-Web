const md5 = require('md5');
const UserService = require('../service/UserService');

const validateCredentials = async (req, res, next) => {
  const { email, password } = req.body;
  const credentials = await UserService.getOneWichEmail(email);
  if (!credentials) {
    throw new Error('Invalid email');
  }
  if (credentials.password !== md5(password)) {
    throw new Error('Invalid password');
  }
  next();
};

module.exports = validateCredentials;
