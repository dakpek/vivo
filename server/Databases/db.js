var mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/viva');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Database Connected!')
});

exports.db = db
