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

const pay = (req, res) => {

    let tester = sample.request

    const Promisifier = new Promise( async (resolve, reject) => {
        try {
        iyzipay.payment.create(tester, function(err, res) {
            if (err) {
                reject(err)
            }
            resolve(res)
        })
        } catch (e) {
            reject(e)
        }
    })

    return Promisifier

}

// const pay = async () => {
//     await iyzipay.payment.create(sample.request, function (err, result) {
//     console.log(err, result);
//     done();
//     })
// }

// IF WITH SAVED CARD:

// paymentCard: {
//     cardUserKey: 'card user key',
//     cardToken: 'card token'
// },

exports.pay = pay;

const getPaymentResult = (req, res) => {
    iyzipay.payment.retrieve({
        locale: Iyzipay.LOCALE.TR,
        conversationId: '123456789',
        paymentId: '1',
        paymentConversationId: '123456789'
    }, function (err, result) {
        console.log(err, result);
        done();
    });
}

exports.getPaymentResult = getPaymentResult;

const createCard = (req, res) => {
    iyzipay.card.create({
        locale: Iyzipay.LOCALE.TR,
        conversationId: '123456789',
        email: 'email@email.com',
        externalId: 'external id',
        card: {
            cardAlias: 'card alias',
            cardHolderName: 'John Doe',
            cardNumber: '5528790000000008',
            expireMonth: '12',
            expireYear: '2030'
        }
    }, function (err, result) {
        console.log(err, result);
        done();
    })
}

exports.createCard = createCard;

const deleteCard = (req, res) => {
    iyzipay.card.delete({
        locale: Iyzipay.LOCALE.TR,
        conversationId: '123456789',
        cardToken: 'card token',
        cardUserKey: 'card user key'
    }, function (err, result) {
        console.log(err, result);
        done();
    });
}

exports.deleteCard = deleteCard;

