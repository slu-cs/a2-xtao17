const fs = require('fs');
const readline = require('readline');
const file = readline.createInterface({
  input: fs.createReadStream('voters.csv')
});


const mongoose = require('mongoose');
const connect = require('./db');
const RegistedVoter= require('./schema');
connect();


const voters = [];
file.on('line', function(line) {
  const columns = line.split(',');
  voters.push(new RegistedVoter({
    first_name: columns[0],
    last_name: columns[1],
    Zip_code: columns[2],
    Voter_history: columns[3]
  }));
});
file.on('close', function(){
  mongoose.connection.dropDatabase()
    .then(() => Promise.all(voters.map(d => d.save())))
    .then(() => mongoose.connection.close())
    .then(() => console.log('Database is ready.'))
    .catch(error => console.error(error.stack));
})
