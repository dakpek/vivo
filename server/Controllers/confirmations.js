const db = require ('../Databases/confirmations')

const addConfirmation = async (ctx, next) => {
  ctx.body = ctx.request.body
  ctx.body = await db.addConfirmation(ctx.body)
  next()
}



//     EXPORTS =================================================================

exports.addConfirmation = addConfirmation;
