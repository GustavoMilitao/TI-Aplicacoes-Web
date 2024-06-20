const { Router } = require('express');
const UserController = require('../controller/UserController');
const QuestionController = require('../controller/QuestionController');
const validateCredentials = require('../middlewares/validateCredentials');

const routes = Router();

routes.post('/', validateCredentials, UserController.getOneNoPassword);
routes.post('/register', UserController.createUser);

routes.get('/users', UserController.getUsers);
routes.get('/validate', UserController.loginValidate);

routes.get('/questions', QuestionController.getQuestions);
routes.post('/questions', QuestionController.createQuestion);

module.exports = routes;
