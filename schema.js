/Define a plan for a collection

const mongoose=require('mongoose');
//Schema for a collection of professors
const RegistedVoter = new mongoose.Schema({
  first_name: String,
  last_name:String,
  Zip_code:Number,
  Voter_history:Number
});

//Speed up queries on all fields
Professor.index({n_registered_voter:1});
Professor.index({first_name:1});
Professor.index({last_name:1});
Professor.index({n_2016Election:1});
Professor.index({n_zipcode:1});
//complete and export this Schema

module.exports =mongoose. model('RegistedVoter', RegistedVoter);
