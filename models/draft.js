const mongoose = require('mongoose');

const draftSchema = new mongoose.Schema({
  round: {
      type: String
  },
  team: {
    type: String
  }
});

module.exports = mongoose.model('Draft', draftSchema);