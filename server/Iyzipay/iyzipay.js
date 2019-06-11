const Iyzipay = require('iyzipay');
const sample = require('./request')

let iyzipay = new Iyzipay({
    apiKey: 'sandbox-lLwXaC4RBDm5rWi8mpiGmJeylNicJiQN',
    secretKey: 'sandbox-7ZLpDUwDhZ7zjFWEftwOsZ0wSKTLQwjU',
    uri: 'https://sandbox-api.iyzipay.com'
});

const test = () => {
    const Promisifier = new Promise( async (resolve, reject) => {
        iyzipay.apiTest.retrieve({}, function(err, res) {
            if (err) {
                reject(err)
            }
            resolve(res)
        })
    })
    return Promisifier
    
}


exports.test = test;

const pay = (data) => {

    let request = sample.request
    
    // request.paymentCard = {
    //     cardUserKey: data.user.card.cardUserKey,
    //     cardToken: data.user.card.token
    // }

    let address = {
        contactName: data.user.firstName + ' ' + data.user.lastName,
        city: data.user.address.city,
        country: 'Turkey',
        zipCode: data.user.address.zipCode.toString(),
        address: data.user.address.address1 + '/' + data.user.address.address2,
    }
    request.shippingAddress = address;
    request.billingAddress = address;

    request.price = data.price;
    request.paidPrice = data.price;
    // request.basketId = data.user.subscription
    request.buyer.id = data.user.uid;
    request.buyer.name = data.user.firstName;
    request.buyer.surname = data.user.lastName;
    request.buyer.gsmNumber = data.user.phoneNumber.toString();
    request.buyer.email = data.user.email;
    request.buyer.city = data.user.address.city
    request.buyer.zipCode = data.user.address.zipCode.toString()
    request.buyer.registrationAddress = address.address;

    request.basketItems[0].price = data.price

    console.log('REQUEST: ', request)


    const Promisifier = new Promise( async (resolve, reject) => {
        try {
        iyzipay.payment.create(request, function(err, res) {
            if (err) {
                reject(err)
            }
            console.log('paid!')
            resolve(res)
        })
        } catch (e) {
            reject(e)
        }
    })
    return Promisifier

}

// // paymentCard: {
// //     cardUserKey: 'card user key',
// //     cardToken: 'card token'
// // },

exports.pay = pay;

const addCard = (data) => {
    return new Promise( async (resolve, reject) => {
        try {
            console.log(data.user)
            iyzipay.card.create({
                locale: Iyzipay.LOCALE.TR,
                conversationId: '111111111',
                email: data.user.email,
                externalId: data.user.uid,
                card: {
                    cardAlias: 'payment card',
                    cardHolderName: `${data.user.firstName} + ${data.user.lastName}`,
                    cardNumber: data.card.cardNumber,
                    expireMonth: data.card.cardExpiryMonth,
                    expireYear: data.card.cardExpiryYear
                }
            }, function (err, res) {
                if (err) {
                    reject(err)
                }
                resolve(res)
            })
        } catch (e) {
            reject(e)
        }
    })
}

exports.addCard = addCard;

// 


// const addSubscriptionProduct = (box) => {

//     return new Promise( async(res, rej) => {
//         try {
//             let createRequest = {
//                 locale: Iyzipay.LOCALE.EN,
//                 conversationId: '111111111',
//                 name: box.name,
//                 description: box.content
//             };

//             iyzipay.subscriptionProduct.create(createRequest, function (err, res) {
//                 if (err) {
//                     reject(err)
//                 }
//                 resolve(res)
//             });

//         } catch (e) {
//             reject(e)
//         }
//     })
// }

// const updateSubscriptionProduct = (box) => {

//     return new Promise( async(res, rej) => {
//         try {
//             let updateRequest = {
//                 locale: Iyzipay.LOCALE.EN,
//                 conversationId: '111111111',
//                 productReferenceCode: box.ext_id,
//                 name: box.name,
//                 description: box.content
//             };

//             iyzipay.subscriptionProduct.update(updateRequest, function (err, res) {
//                 if (err) {
//                     reject(err)
//                 }
//                 resolve(res)
//             });

//         } catch (e) {
//             reject(e)
//         }
//     })
// }

// const getSubscriptionProduct = (box) => {

//     return new Promise( async(res, rej) => {
//         try {
//             var retrieveRequest = {
//                 productReferenceCode: box.ext_id
//             };

//             iyzipay.subscriptionProduct.retrieve(retrieveRequest, function (err, res) {
//                 if (err) {
//                     reject(err)
//                 }
//                 resolve(res)
//             });

//         } catch (e) {
//             reject(e)
//         }
//     })
// }

// const addSubscriptionPlan = (box) => {

//     return new Promise( async(res, rej) => {
//         try {
//             var createRequest = {
//                 locale: Iyzipay.LOCALE.EN,
//                 conversationId: '123456789',
//                 productReferenceCode: box.ext_id,
//                 name: box.name,
//                 price: box.price,
//                 currencyCode: Iyzipay.CURRENCY.TRY,
//                 paymentInterval: Iyzipay.SUBSCRIPTION_PRICING_PLAN_INTERVAL.MONTHLY,
//                 paymentIntervalCount: 1,
//                 trialPeriodDays: 0,
//                 planPaymentType: Iyzipay.PLAN_PAYMENT_TYPE.RECURRING
//             };

//             iyzipay.subscriptionPricingPlan.create(createRequest, function (err, res) {
//                 if (err) {
//                     reject(err)
//                 }
//                 resolve(res)
//             });

//         } catch (e) {
//             reject(e)
//         }
//     })
// }

// const getSubscriptionProduct = (box) => {

//     return new Promise( async(res, rej) => {
//         try {
//             var retrieveRequest = {
//                 productReferenceCode: box.ext_id
//             };

//             iyzipay.subscriptionProduct.retrieve(retrieveRequest, function (err, res) {
//                 if (err) {
//                     reject(err)
//                 }
//                 resolve(res)
//             });

//         } catch (e) {
//             reject(e)
//         }
//     })
// }

// //CUSTOMERS

// const createSubscriptionCustomer = (user) => {

//     return new Promise( async(res, rej) => {
//         try {
//             var createRequest = {
//                 locale: Iyzipay.LOCALE.EN,
//                 conversationId: '11111',
//                 name: user.firsName,
//                 surname: user.lastName,
//                 identityNumber: '000000000',
//                 email: user.email,
//                 gsmNumber: user.phoneNumber',
//                 billingAddress: {
//                     contactName: `${user.firstName} ${user.lastName}`,
//                     city: user.address.city,
//                     country: 'Turkey',
//                     address: `${user.address.address1} ${user.address.address2}`,
//                     zipCode: user.address.zipCode
//                 },
//                 shippingAddress: {
//                     contactName: `${user.firstName} ${user.lastName}`,
//                     city: user.address.city,
//                     country: 'Turkey',
//                     address: `${user.address.address1} ${user.address.address2}`,
//                     zipCode: user.address.zipCode
//                 };
//             }

//             iyzipay.subscriptionCustomer.create(createRequest, function (err, res) {
//                 if (err) {
//                     reject(err)
//                 }
//                 resolve(res)
//             });

//         } catch (e) {
//             reject(e)
//         }
//     })
// }

// const getSubscriptionProduct = (box) => {

//     return new Promise( async(res, rej) => {
//         try {
//             var retrieveRequest = {
//                 productReferenceCode: box.ext_id
//             };

//             iyzipay.subscriptionProduct.retrieve(retrieveRequest, function (err, res) {
//                 if (err) {
//                     reject(err)
//                 }
//                 resolve(res)
//             });

//         } catch (e) {
//             reject(e)
//         }
//     })
// }

// const getSubscriptionProduct = (box) => {

//     return new Promise( async(res, rej) => {
//         try {
//             var retrieveRequest = {
//                 productReferenceCode: box.ext_id
//             };

//             iyzipay.subscriptionProduct.retrieve(retrieveRequest, function (err, res) {
//                 if (err) {
//                     reject(err)
//                 }
//                 resolve(res)
//             });

//         } catch (e) {
//             reject(e)
//         }
//     })
// }

// const getSubscriptionProduct = (box) => {

//     return new Promise( async(res, rej) => {
//         try {
//             var retrieveRequest = {
//                 productReferenceCode: box.ext_id
//             };

//             iyzipay.subscriptionProduct.retrieve(retrieveRequest, function (err, res) {
//                 if (err) {
//                     reject(err)
//                 }
//                 resolve(res)
//             });

//         } catch (e) {
//             reject(e)
//         }
//     })
// }




// // const pay = async () => {
// //     await iyzipay.payment.create(sample.request, function (err, result) {
// //     console.log(err, result);
// //     done();
// //     })
// // }

// // IF WITH SAVED CARD:

// // paymentCard: {
// //     cardUserKey: 'card user key',
// //     cardToken: 'card token'
// // },

// exports.pay = pay;

// const getPaymentResult = (req, res) => {
//     iyzipay.payment.retrieve({
//         locale: Iyzipay.LOCALE.TR,
//         conversationId: '123456789',
//         paymentId: '1',
//         paymentConversationId: '123456789'
//     }, function (err, result) {
//         console.log(err, result);
//         done();
//     });
// }

// exports.getPaymentResult = getPaymentResult;

// const createCard = (req, res) => {
//     iyzipay.card.create({
//         locale: Iyzipay.LOCALE.TR,
//         conversationId: '123456789',
//         email: 'email@email.com',
//         externalId: 'external id',
//         card: {
//             cardAlias: 'card alias',
//             cardHolderName: 'John Doe',
//             cardNumber: '5528790000000008',
//             expireMonth: '12',
//             expireYear: '2030'
//         }
//     }, function (err, result) {
//         console.log(err, result);
//         done();
//     })
// }

// exports.createCard = createCard;

// const deleteCard = (req, res) => {
//     iyzipay.card.delete({
//         locale: Iyzipay.LOCALE.TR,
//         conversationId: '123456789',
//         cardToken: 'card token',
//         cardUserKey: 'card user key'
//     }, function (err, result) {
//         console.log(err, result);
//         done();
//     });
// }

// exports.deleteCard = deleteCard;

