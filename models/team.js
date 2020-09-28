const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true
    },
    location: {
        type: String,
        required: true
    },
    ranking: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Team', teamSchema);