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
    billingInfo: {
      firstName: String,
      lastName: String,
      address: {
        address1: String,
        address2: String,
        city: String,
        county: String,
        country: String,
        zipCode: Number,
      }
    },
    card: {
      cardUserKey: String,
      token: String,
      type: String,
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
  },
  { typeKey: '$type' })
  
module.exports = mongoose.model('Users', Users);