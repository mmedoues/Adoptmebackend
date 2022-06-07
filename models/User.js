const mongoose = require('mongoose')

const { Schema, model } = mongoose

const userSchema = new Schema({
    
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },

  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
  phoneNumber: Number,
  address: String
})

module.exports = User = model('User', userSchema)
