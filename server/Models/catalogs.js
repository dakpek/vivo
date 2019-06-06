const mongoose = require('mongoose')

const Catalogs = new mongoose.Schema({
    name: String,
    pads: {
      daily: Number,
      normal: Number,
      super: Number,
    },
    tampons: {
      normal: Number,
      super: Number,
    },
    pills: Number
  })

  module.exports = mongoose.model('Catalogs', Catalogs);