const mongoose = require('mongoose');
const connect = require('./db');
const RegistedVoter = require('./schema');

connect(); // To the database
const queries = [
  RegistedVoter.find().where('Zip_code').equals('13617'),
  RegistedVoter.find().where('first_name').equals('STARR'),
  RegistedVoter.find({'Voter_history':{$regex:/GE16/}}),
  RegistedVoter.find().sort('-last_name').limit(1),
  RegistedVoter.distinct('Zip_code')

]
Promise.all(queries)
  .then(function(results){
  console.log('Number of voters with zip code 13617:', results[0].length);
  console.log('Full Names of all registed voters with first name STARR:',results[1].map(p=>p.first_name+' '+p.last_name));
  console.log('Number of people voted in the 2016 general election:',results[2].length);
  console.log('last-name that comes last in the county in alphabetical order',results[3].map(p=>p.last_name));
  console.log('How many zip codes does the county contain?',results[4].length);
  }).catch(error => console.error(error.stack));
