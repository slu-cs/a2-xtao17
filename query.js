const mongoose = require('mongoose');
const connect = require('./db');
const RegistedVoter = require('./schema');

connect(); // To the database
const queries = [
  RegistedVoter.find().where('Zip_code').equals('13617').count(),
  RegistedVoter.distinct('Zip_code')
]
Promise.all(queries)
  .then(function(results){
  console.log('Number of voters with zip code 13617:', results[0]);
  console.log('How many zip codes does the county contain?',results[1]);
  }).catch(error => console.error(error.stack));
