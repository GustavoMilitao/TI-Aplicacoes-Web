const { Router } = require('express');
const UserController = require('../controller/UserController');
const validateCredentials = require('../middlewares/validateCredentials');

const userRoute = Router();

userRoute.post('/', validateCredentials, UserController.getOneNoPassword);
userRoute.post('/register', UserController.createUser);

userRoute.get('/users', UserController.getUsers);
userRoute.get('/validate', UserController.loginValidate);

module.exports = userRoute;