const mongoose = require('mongoose')
const db = require('./db')
const confirmations = require('../Models/confirmations');


const addConfirmation = async (confirmation) => {

  confirmations.create(confirmation)
  .then(() => console.log('Added Item'))
  .catch(err => console.error(err))
}


exports.addConfirmation = addConfirmation