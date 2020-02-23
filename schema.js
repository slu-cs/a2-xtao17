
const mongoose=require('mongoose');
//Schema for a collection of professors
const RegistedVoter = new mongoose.Schema({
  first_name: String,
  last_name:String,
  Zip_code:Number,
  Voter_history:String
});

//Speed up queries on all fields

RegistedVoter.index({first_name:1});
RegistedVoter.index({last_name:1});
RegistedVoter.index({Zip_code:1});
RegistedVoter.index({Voter_history:1});
//complete and export this Schema

module.exports =mongoose. model('RegistedVoter', RegistedVoter);
