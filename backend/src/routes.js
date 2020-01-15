const { Router } = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

const routes = Router();

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

routes.get('/search', SearchController.index);

module.exports = routes;

//Métodos HTTP: GET, POST, PUT, DELETE

//Tipos de parametros:

//Query Params: request.query (Filtros, ordenação, paginação, ...)
//Route Params: request.params (Identificar resurso na alteração ou remoção)
//Body : request.body (Daddos para criaçao ou alteraçção de um recurso)

//MongoDB 