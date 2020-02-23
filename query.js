const mongoose = require('mongoose');
const connect = require('./db');
const RegistedVoter = require('./schema');

connect(); // To the database
const queries = [
  RegistedVoter.find().where('Zip_code').equals('13617'),
  RegistedVoter.find().where('first_name').equals('STARR'),
  RegistedVoter.find().where('Voter_history'),
  RegistedVoter.distinct('Zip_code')
]
Promise.all(queries)
  .then(function(results){
  console.log('Number of voters with zip code 13617:', results[0].length);
  console.log('Full Names of all registed voters with first name STARR:',results[1].map(p=>p.first_name+' '+p.last_name));
  const n_GE16=[]
  for(const element of results[2]){
    if(element.search("GE16")==true){
      n_GE16.push(element);
    }
  }
  console.log('Number of people voted in the 2016 general election:',n_GE16);
  console.log('How many zip codes does the county contain?',results[3].length);
  }).catch(error => console.error(error.stack));
