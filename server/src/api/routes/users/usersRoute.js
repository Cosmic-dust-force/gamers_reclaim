const express = require('express');
const { login } = require('./usersController');
const usersRouter = express.Router();

usersRouter.post('/login', login)