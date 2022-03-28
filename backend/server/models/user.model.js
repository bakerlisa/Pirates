const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName: {
        type:String,
        required: [true, "First name is required"],
        minlength: [3, "First name needs to be at least 3 characters"]
    },
    lastName: {
        type:String,
        required: [true, "Last name is required"],
        minlength: [3, "Last name needs to be at least 3 characters"]
    },
    email: {
        type: String,
        required: [true, "Eamil is required"]
    },
    password:{
        type: String,
        minlength: [8, "password needs to be at least 8 characters"],
        required: [true, "password is required"]
    }
},{timestamps:true});

const Users = mongoose.model('Users', UserSchema);

module.exports = Users;