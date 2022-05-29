const express = require('express');

module.exports = function(server) {

  //API Routes

  const router = express.Router();

  server.use('/', router);

  //Registering API methods in router

  const itemService = require('../itens/genreService');

  itemService.register(router, '/genre');

}