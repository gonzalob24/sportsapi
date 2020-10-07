var express = require('express');
var router = express.Router();
var path = require('path');
const { subscribe } = require('.');
const game = require("../models/game");

// Get all games
router.get('/', async (req, res) => {
    try {
        const games = await game.find();
        res.json(games);
    } catch (err) {
        res.status(500).json({ message: err.message});
    }
});

// Get all games for year
router.get('/year/:year', async (req, res) => {
    try {
        const games = await game.find({Season: req.params.year});
        res.json(games);
    } catch (err) {
        res.status(500).json({ message: err.message});
    }
});

// Get all games for team
router.get('/team/:team', async (req, res) => {
    try {
        const games = await game.find({$or:[{HomeTeam: req.params.team},{VistorTeam:req.params.team}]});
        res.json(games);
    } catch (err) {
        res.status(500).json({ message: err.message});
    }
});

// Get one game
router.get('/:id', getGame, (req, res) => {
    res.send(res.game);
});

// Create one
router.post('/', async (req, res) => {
    const gameValues = new game({
        GameDate: req.body.GameDate,
        GameStatus: req.body.GameStatus,
        HomeTeam: req.body.HomeTeam,
        VistorTeam: req.body.VistorTeam,
        Season: req.body.Season,
        WinnerTeam: req.body.WinnerTeam,
        HomeTeamPoints: req.body.HomeTeamPoints,
        VistorTeamPoints: req.body.VistorTeamPoints,
        predictedWinner: req.body.predictedWinner
    });
    try {
        const newGame = await game(gameValues).save();
        res.status(201).json(newGame);
    } catch (err) {
        res.status(400).json({ message: err.message});
    }
})

// update one
router.patch('/:id', getGame, (req, res) => {
    // if new attributes added to model then need more if statements
    if (req.body.GameDate) {
        res.game.GameDate = req.body.GameDate;
    }

    if (req.body.GameStatus) {
        res.game.GameStatus = req.body.GameStatus;
    }

    if (req.body.HomeTeam) {
        res.game.HomeTeam = req.body.HomeTeam;
    }

    if (req.body.VistorTeam) {
        res.game.VistorTeam = req.body.VistorTeam;
    }

    if (req.body.Season) {
        res.game.Season = req.body.Season;
    }

    if (req.body.WinnerTeam) {
        res.game.WinnerTeam = req.body.WinnerTeam;
    }

    if (req.body.HomeTeamPoints) {
        res.game.HomeTeamPoints = req.body.HomeTeamPoints;
    }

    if (req.body.VistorTeamPoints) {
        res.game.VistorTeamPoints = req.body.VistorTeamPoints;
    }

    if (req.body.predictedWinner) {
        res.game.predictedWinner = req.body.predictedWinner;
    }

    res.game.save();
    res.send(res.game);
    
});

async function getGame(req, res, next) {
    let gameFound;
    try {
        gameFound = await game.findById(req.params.id);
        if (gameFound == null) {
            return res.status(404).json( {message: 'Cannot find game'});
        }
    } catch (err) {
        res.status(500).json({ message: err.message});
    }
    res.game = gameFound;
    next();
}

module.exports = router;