const db = require ('../Databases/users')

const signInUser = async (ctx, next) => {
  ctx.body = ctx.request.body
  ctx.body = await db.signInUser(ctx.body)
  next()
}

const addUser = async (ctx, next) => {
  ctx.body = ctx.request.body
  ctx.body = await db.addUser(ctx.body)
  next()
}

const deleteUser = async (ctx, next) => {
  ctx.body = await db.deleteUser(ctx)
  next()
}

const editUser = async (ctx, next) => {
  ctx.body = ctx.request.body
  ctx.body = await db.editUser(ctx.body)
  next()
}

const findUser = async (ctx, next) => {
  let uid = ctx.request.body
  console.log('UID: ', uid)
  ctx.body = await db.findUser(uid)
  next()
}


//     EXPORTS =================================================================

exports.addUser = addUser
exports.deleteUser = deleteUser
exports.signInUser = signInUser
exports.editUser = editUser
exports.findUser = findUser
