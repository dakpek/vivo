const mongoose = require('mongoose')

const Users = new mongoose.Schema({
    uid: String,
    address: {
      address1: String,
      address2: String,
      city: String,
      county: String,
      country: String,
      zipCode: Number,
    },
    card: {
      token: String,
      type: String,
      ccv: Number,
      expiration: Date,
      last4: Number,
    },
    email: String,
    password: String,
    firstName: String,
    lastName: String,
    phoneNumber: Number,
    enrolled: Date,
    subscription: String,
    cart: {
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
  
module.exports = mongoose.model('Users', Users);