const mongoose = require('mongoose');
const connect = require('./db');
const RegistedVoter = require('./schema');

connect(); // To the database
const queries = [
  RegistedVoter.find().where('Zip_code').equals('13617').count()
  RegistedVoter.find().where('first_name').equals('STARR')
  RegistedVoter.find().where('Voter_history').contain('GE16').count()
  RegistedVoter.distinct('Zip_code')
]
Promise.all(queries)
  .then(function(results){
  console.log('Number of voters with zip code 13617:', results[0]);
  console.log('full names of all the registered voters whose first-name is STARR:', results[1].map(d=>d.first_name+" "+d.last_name));
  console.log('people voted in the 2016 general election (GE16):',result[2]);
  console.log('How many zip codes does the county contain?',result[3]);
  }).catch(error => console.error(error.stack));
