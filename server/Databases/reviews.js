const mongoose = require('mongoose')
const db = require('./db')
const reviews = require('../Models/reviews');

const getReviews = async () => {
  let res = await reviews.find({"stars":{$gte: 4}})
  return res
}

const addReviews = async (review) => {
  let res = await reviews.create(review)
  return res
}


exports.getReviews = getReviews
exports.addReviews = addReviews