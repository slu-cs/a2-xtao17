const mongoose = require('mongoose');
const connect = require('./db');
const RegistedVoter = require('./schema');

connect(); // To the database
const queries = [
  RegistedVoter.find({Zip_code:13617})
]
Promise.all(queries)
  .then(function(results){
    console.log('Number of voters with zip code:13617', results[0].length);
  }).catch(error => console.error(error.stack));
