// const iyzipay = require('../IyziPay/iyzipay')
// const user = require('../Databases/users')

// const test = async (ctx, next) => {

//   next()
//   ctx.body = await iyzipay.pay()
//   console.log('Hello', ctx.body)
// }

// const pay = async (ctx, next) => {
//   ctx.body = ctx.request.body
//   ctx.body = await iyzipay.pay(ctx.body)
//   next()

//   // ctx.body = await iyzipay.pay()
//   // console.log('Hello', ctx.body)
// }

// const addCard = async (ctx, next) => {
//   ctx.body = ctx.request.body
//   ctx.body = await iyzipay.addCard(ctx.body)
//   next()
// }



// // const editCatalog = async (ctx, next) => {
// //   ctx.body = ctx.request.body
// //   ctx.body = await db.editCatalog(ctx.body)
// //   next()
// // }


// //     EXPORTS =================================================================

// exports.test = test
// exports.pay = pay
// exports.addCard = addCard
// // exports.getCatalog = getCatalog
