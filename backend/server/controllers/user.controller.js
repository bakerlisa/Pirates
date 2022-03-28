const User = require('../models/user.model');

// FIND
module.exports.allUsers = (req, res) => {
    User.find()
        .then(allDaUsers => res.json({ users: allDaUsers }))
        .catch(err => res.status(400).json({ message: 'Something went wrong finding all users', error: err }));
}

module.exports.singleUser = (req,res) => {
    User.findOne({_id: req.params.id})
    .then(singleUserInfo => res.json({ user: singleUserInfo}))
    .catch(err => res.status(400).json({ message: 'Something went wrong when getting single user', error: err }));
}

module.exports.loginUsers = (req,res) => {
    User.findOne({email: req.body.email, password: req.body.password})
    .then(singleUser => res.json({ user: singleUser}))
    .catch(err => res.status(400).json({ message: 'Something went wrong logging in', error: err }));
}

module.exports.editUser = (req,res) => {
    User.findOneAndUpdate({_id: req.params.id},
        req.body,
        { new: true, runValidators: true })
    .then(updateUser => res.json({ updatedUser: updateUser }))
    .catch(err => res.status(400).json({ message: 'Something went wrong when getting single user', error: err }));
}

// CREATE
module.exports.createUser = (req,res) => {
    User.create(req.body)
    .then(newUser => res.json({ createNewUser: newUser }))
    .catch(err => res.status(400).json({ message: 'Something went wrong creating new user', error: err }));
}

// DELETE
module.exports.deleteUser = (req,res) => {
    User.deleteMany({_id: req.params.id})
    .then(result => res.json({ result: result}))
    .catch(err => res.status(400).json({ message: 'Something went wrong when deleting user', error: err }));
}
