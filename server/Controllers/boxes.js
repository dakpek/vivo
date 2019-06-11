const db = require ('../Databases/boxes')

const addBox = async (ctx, next) => {
  ctx.body = ctx.request.body
  ctx.body = await db.addBox(ctx.body)
  next()
}

const deleteBox = async (ctx, next) => {
  bid = ctx.request.body
  ctx.body = await db.deleteBox(bid)
  next()
}

const editBox = async (ctx, next) => {
  ctx.body = ctx.request.body
  bid = ctx.body.bid
  box = ctx.body.newBox
  ctx.body = await db.editBox(bid, newBox)
  next()
}

const findBox = async (ctx, next) => {
  let bid = ctx.request.body
  console.log('BID: ', bid)
  ctx.body = await db.findBox(bid)
  next()
}

const getBoxes = async (ctx, next) => {
  ctx.body = await db.getBoxes()
  next()
} 


//     EXPORTS =================================================================

exports.addBox = addBox
exports.deleteBox = deleteBox
exports.editBox = editBox
exports.findBox = findBox
exports.getBoxes = getBoxes
