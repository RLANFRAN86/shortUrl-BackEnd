const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema =  new Schema({
  name: {
    type: String,
    requised: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },

  confirm: {
    type: Boolean,
    default: false,
  },
});

// transform se ejecuta c/vez que convierta un doc de mongo en obj JSON
const transformObject = (document, returnedObject) => {
  returnedObject.id = returnedObject._id.toString();
  delete returnedObject._id;
}

mongoose.set('toJSON', { transform: transformObject });


const User = mongoose.model('User', userSchema);

module.exports = User;
