const mongoose = require('mongoose');
/*
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    // Regexp to validate emails with more strict rules as added in tests/users.js which also conforms mostly with RFC2822 guide lines
    match: [/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Please enter a valid email'],
  },
  hashedPassword: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  roles: [{
    type: String,
  }]
}, {
  versionKey: false
});
*/
const UserSchema = new mongoose.Schema({
  address: {
    type: String,
  },
  chainId: {
	  type: String,
  },
  hash: {
    type: String,
  },
  username: {
    type: String,
  },
  email: {
    type: String,
    // Regexp to validate emails with more strict rules as added in tests/users.js which also conforms mostly with RFC2822 guide lines
    // match: [/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Please enter a valid email'],
  },
  password: {
    type: String,
  },
  roles: {
    type: String,
	  default: "0"
  },   
  signStatus: {
    type: String,
  },
  bio: {
    type: String,
  },
  item: {
    type: String,
  },
  bid: {
    type: String,
  },
  price: {
    type: String,
  },
  auction: {
    type: String,
  },
  outbid: {
    type: String,
  },
  referral: {
    type: String,
  },
  asset: {
    type: String,
  },
  purchase: {
    type: String,
  },
  newsletter: {
    type: String,
  },
  ethvalue: {
    type: String,
  },
  exchange: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});
var User = mongoose.model('User', UserSchema);
module.exports = User


