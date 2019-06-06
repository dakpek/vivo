const mongoose = require('mongoose')

const Reviews = new mongoose.Schema({
    title: String,
    author: String,
    stars: Number,
    review: String,
    uid: String
  })

module.exports = mongoose.model('Reviews', Reviews);