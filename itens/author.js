const restful = require('node-restful')

const mongoose = restful.mongoose

const authorSchema = new mongoose.Schema({

  firts_name: { type: String, required: true },

  family_name: { type: String, required: true },

  date_of_birth: { type: Date, required: true },

  date_of_death: { type: Date, required: true },

  name: { type: String, required: true },

  lifespan: { type: String, required: true },

  url: { type: String, required: true },

  })

module.exports = restful.model('Author', authorSchema)