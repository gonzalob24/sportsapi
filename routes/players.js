var express = require('express');
var router = express.Router();
const player = require('../models/player');

// Get all players
router.get('/', async (req, res) => {
    try {
        const players = await player.find();
        res.json(players);
    } catch (err) {
        res.status(500).json({ message: err.message});
    }
});

// Get one player
router.get('/:id', getPlayer, (req, res) => {
    res.send(res.player);
});

// Create one
router.post('/', async (req, res) => {
    const playerValues = new player({
        ...req.body
    });
    try {
        const newPlayer = await player(playerValues).save();
        res.status(201).json(newPlayer);
    } catch (err) {
        res.status(400).json({ message: err.message});
    }
})

// update one
router.patch('/:id', getPlayer, (req, res) => {
    // if new attributes added to model then need more if statements
    if (req.body.name) {
        res.player.name = req.body.name;
    }
    
    if (req.body.age) {
      res.player.age = req.body.age;
    }

    if (req.body.height) {
      res.player.height = req.body.height;
    }

    if (req.body.weight) {
      res.player.weight = req.body.weight;
    }
    
    if (req.body.college) {
      res.player.college = req.body.college;
    }

    if (req.body.country) {
      res.player.country = req.body.country;
    }


    if (req.body.DraftYear) {
      res.player.DraftYear = req.body.DraftYear;
    }

    if (req.body.DraftRound) {
      res.player.DraftRound = req.body.DraftRound;
    }

    if (req.body.currentTeam) {
      res.player.currentTeam = req.body.currentTeam;
    }


      res.player.save();
      res.send(res.player)
    
});

async function getPlayer(req, res, next) {
    let playerFound;
    try {
      playerFound = await player.findById(req.params.id);
        if (playerFound == null) {
            return res.status(404).json( {message: 'Cannot find team'});
        }
    } catch (err) {
        res.status(500).json({ message: err.message});
    }
    res.player = playerFound;
    next();
}

module.exports = router;