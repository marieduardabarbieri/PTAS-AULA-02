const express = require('express');
const routes = express.Router()
const userController = require('../controller/userController');

routes.post('/user', userController.createUser);
routes.get('/user', userController.pegarDados);
routes.delete('/user/:id', userController.deleteUser);
routes.put('/user/:id', userController.updateUser);
routes.post('/user/authenticated', userController.autenticarUser);

module.exports = routes;