const mongoose = require('mongoose')

const Confirmations = new mongoose.Schema({
    uid: String,
    privacyAgreement: Number,
    cardTokenizationAgreement: Number,
    ToSAgreement: Number
  })
  
module.exports = mongoose.model('Confirmations', Confirmations);