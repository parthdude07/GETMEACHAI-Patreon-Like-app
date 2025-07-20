import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
  name: {type: String},
  email: {type: String,required: true,unique: true},
  username: {type: String,required: true,unique: true},
  createdAT: {type: Date, default: Date.now},
  
});
const User = mongoose.models.User || mongoose.model('User', userSchema);
export default User;    