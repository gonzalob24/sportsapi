var express = require('express');
var router = express.Router();
var path = require('path');
const { subscribe } = require('.');
const team = require('../models/team');

// Get all teams
router.get('/', async (req, res) => {
    try {
        const teams = await team.find();
        res.json(teams);
    } catch (err) {
        res.status(500).json({ message: err.message});
    }
});

// Get one team
router.get('/:id', getTeam, (req, res) => {
    res.send(res.team.name);
});

// Create one
router.post('/', async (req, res) => {
    const teamValues = new team({
        name: req.body.name, 
        location: req.body.location,
        ranking: req.body.ranking
    });
    try {
        const newTeam = await team(teamValues).save();
        res.status(201).json(newTeam);
    } catch (err) {
        res.status(400).json({ message: err.message});
    }
})

// update one
router.patch('/', (req, res) => {
    res.send('Hello world');
});

async function getTeam(req, res, next) {
    let teamFound;
    try {
        teamFound = await team.findById(req.params.id);
        if (teamFound == null) {
            return res.status(404).json( {message: 'Cannot find team'});
        }
    } catch (err) {
        res.status(500).json({ message: err.message});
    }
    res.team = teamFound;
    next();
}

module.exports = router;