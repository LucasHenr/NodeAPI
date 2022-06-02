const Book_Instance = require('./book_instance');

//Create REST API, adds CRUD to Mongog's schema

Book_Instance.methods(['get', 'post', 'put', 'delete']);

//Return post/put methods updated

Book_Instance.updateOptions({new: true, runValidators: true});

module.exports = Book_Instance