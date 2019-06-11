const Iyzipay = require('iyzipay');

let iyzipay = new Iyzipay({
    apiKey: 'sandbox-lLwXaC4RBDm5rWi8mpiGmJeylNicJiQN',
    secretKey: 'sandbox-7ZLpDUwDhZ7zjFWEftwOsZ0wSKTLQwjU',
    uri: 'https://sandbox-api.iyzipay.com'
});

const test = (res) => {
    return iyzipay.apiTest.retrieve({}, function (err, result) {
        res.body = result;
        done();
    });
}

exports.test = test;

const pay = (req, res) => {
    iyzipay.payment.create(req, function (err, result) {
    console.log(err, result);
    done();
    })
}

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