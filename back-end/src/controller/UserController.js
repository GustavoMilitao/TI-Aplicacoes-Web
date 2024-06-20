const authService = require('../service/authService');
const UserService = require('../service/UserService');

const UserController = {
  getOneNoPassword: async (req, res) => {
    const { email } = req.body;
    const userData = await UserService.getOneNoPassword(email);
    const token = authService.createToken(userData);
    const user = { ...userData, token };
    res.status(200).json(user);
  },

  getUsers: async (req, res) => {
    const users = await UserService.getUsers();
    return res.status(200).json(users);
  },

  createUser: async (req, res) => {
    const { name, email, password } = req.body;
    const newUser = await UserService.createUser({ name, email, password });
    return res.status(201).json(newUser);
  },

  loginValidate: async (req, res) => {
    const { authorization } = req.headers;
    if (!authorization) return res.status(401).json({ message: 'Missing token' });
    const readToken = authService.readToken(authorization);
    const { body: { role } } = readToken;
    res.status(200).json({ role });
  },
};

module.exports = UserController;
