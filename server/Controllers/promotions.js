const db = require('../Databases/promotions')

const addEmail = async (ctx, next) => {
  ctx.body = ctx.request.body
  console.log(ctx.body)
  ctx.body = await db.addEmail(ctx.body)
  next()
}


//     EXPORTS =================================================================


exports.addEmail = addEmail
