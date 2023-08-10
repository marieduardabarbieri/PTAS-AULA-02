const connectionDataBase = require('./config/connection');
const express = require('express');
const routes = express.Router()
const routes = require('./router/routes')
const userController = require('../controller/userController');

const app = express();
const port = 3003;
app.use(express.json(), routes);
app.listen(port, () => {console.log(`Run serve... ${port}`)})
app.get('/', (req,res) => res.send("API-USER"));

routes.post('/user', userController.createUser);
routes.get('/user', userController.pegarDados);
routes.delete('/user/:id', userController.deleteUser);
routes.put('/user/:id', userController.updateUser);


module.exports = routes;