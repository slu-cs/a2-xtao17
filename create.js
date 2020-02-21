const mongoose = require('mongoose');
const connect = require('./db');
const RegistedVoter= require('./schema');
connect();

const fs = require('fs');
const readline = require('readline');
const file = readline.createInterface({
  input: fs.createReadStream('voters.csv')
  console.log('read the lines already')
});

const voters = [];
file.on('line', function(line) {
  const columns = line.split(',');
  voters.push(new RegistedVoter({
    first_name: columns[0],
    last_name: columns[1],
    Zip_code: Number(columns[2]),
    Voter_history: columns[3]
  }));
  console.log('saved one')
});


const saves = voters.map(d => d.save());

Promise.all(saves)
  .then(()=>mongoose.connection.dropDatabase())
  .then(() => mongoose.connection.close())
  .then(() => console.log('Database is ready.'))
  .catch(error => console.error(error.stack));
