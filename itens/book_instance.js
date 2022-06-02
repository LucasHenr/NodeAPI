const restful = require('node-restful')

const mongoose = restful.mongoose

const book_instanceSchema = new mongoose.Schema({

  book: { type: String, required: true },

  imprint: { type: String, required: true },

  status: { type: Number, required: true },

  due_back: { type: Date, required: true },

  url: { type: String, required: true },
  })

module.exports = restful.model('Book_Instance', book_instanceSchema)