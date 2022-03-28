const Pirate = require('../models/pirate.model');

// FIND
module.exports.allPirates = (req, res) => {
    Pirate.find()
        .then(allDaPirates => res.json({ pirates: allDaPirates }))
        .catch(err => res.status(400).json({ message: 'Something went wrong finding all Pirate', error: err }));
}

module.exports.singlePirate = (req,res) => {
    Pirate.findOne({_id: req.params.id})
    .then(singlePirateInfo => res.json({ pirate: singlePirateInfo}))
    .catch(err => res.status(400).json({ message: 'Something went wrong when getting single Pirate', error: err }));
}

module.exports.FindCaptainPirate = (req,res) => {
    Pirate.find({crew: "Captain"})
    .then(singlePirateInfo => res.json({ pirate: singlePirateInfo}))
    .catch(err => res.status(400).json({ message: 'Something went wrong when getting single Pirate', error: err }));
}

module.exports.editPirate = (req,res) => {
    Pirate.findOneAndUpdate({_id: req.params.id},
        req.body,
        { new: true, runValidators: true })
    .then(updatePirate => res.json({ updatedPirate: updatePirate }))
    .catch(err => res.status(400).json({ message: 'Something went wrong when getting single Pirate', error: err }));
}

// CREATE
module.exports.createPirate = (req,res) => {
    Pirate.create(req.body)
    .then(newPirate => res.json({ createNewPirate: newPirate }))
    .catch(err => res.status(400).json({ message: 'Something went wrong creating new Pirate', error: err }));
}

// DELETE
module.exports.deletePirate = (req,res) => {
    Pirate.deleteMany({_id: req.params.id})
    .then(result => res.json({ result: result}))
    .catch(err => res.status(400).json({ message: 'Something went wrong when deleting Pirate', error: err }));
}
