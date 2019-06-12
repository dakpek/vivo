var mongoose = require('mongoose');


mongoose.connect('mongodb://doruk:8kadin@ds235947.mlab.com:35947/heroku_w45jdrv2');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Database Connected!')
});

exports.db = db

