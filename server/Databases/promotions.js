const mongoose = require('mongoose')
const db = require('./db')
const promotions = require('../Models/promotions');

const addEmail = async (email) => {
  console.log(email)
  let res = await promotions.create(email)
  console.log(res)
  return res
}



exports.addEmail = addEmail