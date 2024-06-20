const express = require('express');
require('express-async-errors');
const cors = require('cors');
const errorHanlder = require('../middlewares/errorHandler');
const userRoute = require('../routes/users');

const app = express();

app.use(cors());
app.use(express.json());

app.use(userRoute);
app.use(errorHanlder);

module.exports = app;
