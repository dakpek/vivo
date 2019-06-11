const Router = require('koa-router')
const router = new Router();
const User = require ('./Controllers/users');
const Box = require ('./Controllers/boxes');
const Catalogs = require ('./Controllers/catalogs');
const Promotions = require ('./Controllers/promotions');
const Payment = require ('./Controllers/payments');
const Reviews = require ('./Controllers/reviews');
const Confirmations = require ('./Controllers/confirmations');


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
.post('/addCard', Payment.addCard)
.post('/pay', Payment.pay)

//BOXES
.post('/box', Box.addBox)
.post('/find-box', Box.findBox)
.post('/edit-box', Box.editBox)
.delete('/box', Box.deleteBox)
.get('/boxes', Box.getBoxes)
//SHIPMENTS

//PROMOTIONS
.post('/email', Promotions.addEmail)

//CONFIRMATIONS
.post('/confirmation', Confirmations.addConfirmation)


module.exports = router;