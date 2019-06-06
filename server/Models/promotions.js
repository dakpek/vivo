const mongoose = require('mongoose')

const Promotions = new mongoose.Schema({
    email: String,
  })

  module.exports = mongoose.model('Promotions', Promotions);