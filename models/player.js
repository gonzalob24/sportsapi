const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  name: {
      type: String
  },
  age: {
    type: String
  },
  height: {
    type: String
  },
  weight: {
    type: String
  },
  college: {
    type: String
  },
  country: {
    type: String
  },
  DraftYear: {
    type: String
  },
  DraftRound: {
    type: String
  },
  currentTeam: {
    type: String
  }
});

module.exports = mongoose.model('Player', playerSchema);