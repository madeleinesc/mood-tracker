const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');


const moodSchema = new Schema({
  date: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  moodColor: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280,
  },
});



const Mood = model('Mood', moodSchema);

module.exports = Mood;
