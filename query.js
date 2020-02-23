const mongoose = require('mongoose');
const connect = require('./db');
const RegistedVoter = require('./schema');

connect(); // To the database
const queries = [
  RegistedVoter.find().where('Zip_code').equal('13617').count()
]
Promise.all(queries)
  .then(function(results){
  console.log('Number of voters with zip code 13617:', results[0]);
  }).catch(error => console.error(error.stack));
