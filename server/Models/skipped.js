const mongoose = require('mongoose')

const Skipped = new mongoose.Schema({
    date: Date,
    uid: String
  })

module.exports = mongoose.model('Skipped', Skipped);