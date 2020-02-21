const mongoose = require('mongoose');
const connect = require('./db');
const RegistedVoter= require('./schema');
connect();

const fs = require('fs');
const readline = require('readline');
const file = readline.createInterface({
  input: fs.createReadStream('voters.csv')
});

const voters = [];
file.on('line', function(line) {
  const columns = line.split(',');
  voters.push({
    first_name: columns[0],
    last_name: columns[1],
    Zip_code: Number(columns[2]),
    Voter_history: columns[3],
  });
});


const saves = voters.map(d => d.save());
mongoose.connection.dropDatabase()
Promise.all(saves)
  .then(() => console.log('All saved'))
  .then(()=>mongoose.connection.close())
  .catch(error => console.log(error.stack));
