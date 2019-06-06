const mongoose = require('mongoose')
const db = require('./db')

const Boxes = new mongoose.Schema({
    bid: String,
    content: {
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
    }
  })
  
  
  module.exports = mongoose.model('Boxes', Boxes);