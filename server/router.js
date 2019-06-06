const Router = require('koa-router')
const router = new Router();
const User = require ('./Controllers/users');
const Catalogs = require ('./Controllers/catalogs');
const Promotions = require ('./Controllers/promotions');
const Payment = require ('./Controllers/payments');
const Reviews = require ('./Controllers/reviews');


router

.get('/', (ctx) => {ctx.body = 'Hello world'})



//USER
.post('/signin', User.signInUser)
.post('/signup', User.addUser)
.post('/user', User.findUser)
.post('/user-edit', User.editUser)
.delete('/user', User.deleteUser)

//CATALOG
.post('/catalog', Catalogs.addCatalog)
.get('/catalog', Catalogs.getCatalog)
//REVIEW
.get('/reviews', Reviews.getReviews)
.post('/reviews', Reviews.addReviews)

//SKIPMONTH

//PAYMENT
.get('/pay', Payment.test)
.post('/pay', Payment.pay)
//BOXES

//SHIPMENTS

//PROMOTIONS
.post('/email', Promotions.addEmail)


module.exports = router;