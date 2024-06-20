const md5 = require('md5');
const authService = require('./authService');
const db = require('../database/db.js');

const UserService = {
  getOneWichEmail: async (email) => {
    const user = await db.getUser(email);
    return user;
  },

  getOneNoPassword: async (email) => {
    const user = await db.getUser(email);
    const userData = { name: user.name, email };
    return userData;
  },

  getUsers: async () => {
    const users = await db.getUsers();
    return users;
  },

  createUser: async ({ name, email, password }) => {
    const emailExists = await db.getUser(email);
    if (emailExists !== undefined) {
      throw new Error('User already exists');
    }
    const newPassword = md5(password);
    db.addUser({ name, email, password: newPassword });
    const token = authService.createToken({ name, email });
    return { name, email, token };
  },
};

module.exports = UserService;