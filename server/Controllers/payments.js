const iyzipay = require('../IyziPay/iyzipay')

const test = async (ctx, next) => {

  next()
  ctx.body = await iyzipay.pay()
  console.log('Hello', ctx.body)
}

const pay = async (ctx, next) => {

  next()
  ctx.body = await iyzipay.pay()
  console.log('Hello', ctx.body)
}



// const editCatalog = async (ctx, next) => {
//   ctx.body = ctx.request.body
//   ctx.body = await db.editCatalog(ctx.body)
//   next()
// }


//     EXPORTS =================================================================

exports.test = test
exports.pay = pay
// exports.getCatalog = getCatalog
