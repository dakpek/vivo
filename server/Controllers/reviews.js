const db = require('../Databases/reviews')

const getReviews = async (ctx, next) => {
  ctx.body = await db.getReviews()
  next()
}

const addReviews = async (ctx, next) => {
  ctx.body = ctx.request.body
  ctx.body = await db.addReviews(ctx.body)
  next()
}


//     EXPORTS =================================================================


exports.addReviews = addReviews
exports.getReviews = getReviews
