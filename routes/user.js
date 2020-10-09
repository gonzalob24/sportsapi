var express = require('express');
var router = express.Router();
const user = require('../models/user');

// Get one user
router.get('/:id', getUser, (req, res) => {
    res.send(res.user);
});

// Create one
router.post('/', async (req, res) => {
    const userValues = new user({
        ...req.body
    });
    try {
        const newUser = await user(userValues).save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ message: err.message});
    }
})

// update one
router.patch('/:id', getUser, (req, res) => {
    // if new attributes added to model then need more if statements
    if (req.body.username) {
        res.user.username = req.body.username;
    }

    if (req.body.password) {
      res.user.password = req.body.password;
    }

    if (req.body.city) {
      res.user.city = req.body.city;
    }

      res.user.save();
      res.send(res.user)
    
});

async function getUser(req, res, next) {
    let userFound;
    try {
      userFound = await user.findById(req.params.id);
        if (userFound == null) {
            return res.status(404).json( {message: 'Cannot find team'});
        }
    } catch (err) {
        res.status(500).json({ message: err.message});
    }
    res.user = userFound;
    next();
}

module.exports = router;