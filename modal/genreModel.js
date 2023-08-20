// genreModel.js
const mongoose = require('../db');

const genreSchema = new mongoose.Schema({
  name: String,
});

const Genre = mongoose.model('Genre', genreSchema);

module.exports = Genre;
