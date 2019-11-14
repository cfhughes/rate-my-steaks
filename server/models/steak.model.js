const uniqueValidator = require('mongoose-unique-validator');
const mongoose = require('mongoose');
const { Schema } = mongoose;

const steakSchema = new Schema({
  title: String,
  description: {
    type: String,
    default: ''
  },
  image: String,
  ratings: [{
    rating: Number,
    comment: String
  }],
}, {timestamps: true});

steakSchema.plugin(uniqueValidator, { message: '{PATH} must be unique.' });

module.exports = mongoose.model('Steak', steakSchema);