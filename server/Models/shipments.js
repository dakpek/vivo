const mongoose = require('mongoose')

const Shipments = new mongoose.Schema({
    sid: String,
    bid: String,
    uid: String,
    trackingNumber: String,
    date: Date,
  })

module.exports = mongoose.model('Shipments', Shipments);