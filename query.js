const mongoose = require('mongoose');
const connect = require('./db');
const RegistedVoter = require('./schema');

connect(); // To the database
const queries = [
  RegistedVoter.find().where('Zip_code').equals('13617').count(),
  RegistedVoter.find().where('first_name').equals('STARR'),
  RegistedVoter.distinct('Zip_code')
]
Promise.all(queries)
  .then(function(results){
  console.log('Number of voters with zip code 13617:', results[0]);
  console.log('Full Names of all registed voters with first name STARR:',results[1].map(p=>p.first_name+' '+p.last_name));
  console.log('How many zip codes does the county contain?',results[2].length);
  }).catch(error => console.error(error.stack));
