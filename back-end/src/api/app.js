const express = require('express');
require('express-async-errors');
const cors = require('cors');
const errorHanlder = require('../middlewares/errorHandler');
const routes = require('../routes/routes');

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);
app.use(errorHanlder);

module.exports = app;
