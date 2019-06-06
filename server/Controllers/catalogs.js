const db = require('../Databases/catalogs')

const getCatalog = async (ctx, next) => {
  ctx.body = await db.getCatalog()
  next()
}

const addCatalog = async (ctx, next) => {
  ctx.body = ctx.request.body
  ctx.body = await db.addCatalog(ctx.body)
  next()
}

const editCatalog = async (ctx, next) => {
  ctx.body = ctx.request.body
  ctx.body = await db.editCatalog(ctx.body)
  next()
}


//     EXPORTS =================================================================

exports.editCatalog = editCatalog
exports.getCatalog = getCatalog
exports.addCatalog = addCatalog
