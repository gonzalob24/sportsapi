const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    GameDate: {
        type: String, 
        required: true
    },
    GameStatus: {
        type: String
    },
    HomeTeam: {
        type: String
    },
    VistorTeam: {
        type: String
    },
    Season: {
        type: String
    },
    WinnerTeam: {
        type: String
    },
    HomeTeamPoints: {
        type: String
    },
    VistorTeamPoints: {
        type: String
    },
    predictedWinner: {
        type: String
    }
});

module.exports = mongoose.model('Game', gameSchema);