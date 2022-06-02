const restful = require('node-restful')

const mongoose = restful.mongoose

const bookSchema = new mongoose.Schema({

  title: { type: String, required: true },

  author: { type: String, required: true },

  summary: { type: String, required: true },

  ISBN: { type: String, required: true },

  genre: { type: String, required: true },

  url: { type: String, required: true },
  })

module.exports = restful.model('Book', bookSchema)