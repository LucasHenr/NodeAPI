const express = require('express');

module.exports = function(server) {

  //API Routes

  const router = express.Router();

  server.use('/', router);

  //Registering API methods in router

  const itemService = require('../itens/genreService');
  const authorService = require('../itens/authorService');
  const bookService = require('../itens/bookService');
  const book_instanceService = require('../itens/book_instanceService');

  itemService.register(router, '/genre');
  itemService.register(router, '/author');
  itemService.register(router, '/book');
  itemService.register(router, '/book_instance');

}