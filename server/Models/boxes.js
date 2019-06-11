const mongoose = require('mongoose')

const Boxes = new mongoose.Schema({
  bid: String,
  name: String,
  totalPrice: Number,
  content: {
    pads: {
      daily: Number,
      normal: Number,
      extra: Number,
    },
    tampons: {
      normal: Number,
      super: Number,
    },
    pills: Number
  },
  prices: {
    pads: {
      daily: Number,
      normal: Number,
      extra: Number,
    },
    tampons: {
      normal: Number,
      super: Number,
    },
    pills: Number
  }
})

  
  module.exports = mongoose.model('Boxes', Boxes);