
const mongoose=require('mongoose');
//Schema for a collection of professors
const RegistedVoter = new mongoose.Schema({
  first_name: String,
  last_name:String,
  Zip_code:Number,
  Voter_history:Number
});

//Speed up queries on all fields
RegistedVoter.index({n_registered_voter:1});
RegistedVoter.index({first_name:1});
RegistedVoter.index({last_name:1});
RegistedVoter.index({n_2016Election:1});
RegistedVoter.index({n_zipcode:1});
//complete and export this Schema

module.exports =mongoose. model('RegistedVoter', RegistedVoter);
