const functions = require('firebase-functions');
const admin = require('firebase-admin');
const cors = require('cors')({origin: true});

const objects =  require('./request.js');
const iyzi = require('./iyzipay.js')



admin.initializeApp();





exports.sample = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    res.send(iyzi.test(res));
  });
});




  exports.trial = functions.https.onRequest( (req, res) => {
    res.status= 200
    res.send(test())
  })



  // IYZIPAY


