const mongoose = require('mongoose')

const Payments = new mongoose.Schema({
    pid: String,
    uid: String,
    amount: Number,
    date: Date,
    sid: String
  })

module.exports = mongoose.model('Payments', Payments);