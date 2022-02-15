const { Schema, model } = require('mongoose');


const moodSchema = new Schema({
  date: {
    type: String,
    required: true,
    unique: true,
  },
  moodColor: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
    maxlength: 100,
  },
});



const Mood = model('Mood', moodSchema);

module.exports = Mood;
