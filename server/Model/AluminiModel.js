const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const alumniSchema = new Schema({
  image: {
    type:String,
    required:true
  },
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Alumni = mongoose.model('Alumni', alumniSchema);

module.exports = Alumni;
