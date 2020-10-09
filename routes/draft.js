var express = require('express');
var router = express.Router();
const draft = require('../models/draft');

// Get one user
router.get('/:id', getDraft, (req, res) => {
    res.send(res.draft);
});

// Create one
router.post('/', async (req, res) => {
    const draftValues = new draft({
        ...req.body
    });
    try {
        const newDraft = await draft(draftValues).save();
        res.status(201).json(newDraft);
    } catch (err) {
        res.status(400).json({ message: err.message});
    }
})

// update one
router.patch('/:id', getDraft, (req, res) => {
    // if new attributes added to model then need more if statements
    if (req.body.round) {
        res.draft.round = req.body.round;
    }

    if (req.body.team) {
      res.draft.team = req.body.team;
    }

    res.draft.save();
    res.send(res.draft)
  
});

async function getDraft(req, res, next) {
    let draftFound;
    try {
      draftFound = await draft.findById(req.params.id);
        if (draftFound == null) {
            return res.status(404).json( {message: 'Cannot find team'});
        }
    } catch (err) {
        res.status(500).json({ message: err.message});
    }
    res.draft = draftFound;
    next();
}

module.exports = router;