const mongoose = require('mongoose');

const PirateSchema = new mongoose.Schema({
    name: {
        type:String,
        required: [true, "Name is required"],
        minlength: [3, "Name needs to be at least 3 characters"]
    },
    about: {
        type:String,
        default: "There's no pirate like me"
    },
    crew: {
        type: String,
        minlength: [3, "Crew needs to be at least 3 characters"],
        required: [true, "Crew is required"]
    },
    more: {
        type: String
    },
    ship:{
        type: String,
        default: "HA! Scooner"
    },
    othership:{
        type: String,
        default: "Wouldn't you want to know!"
    },
    shipImage:{
        type: String,
        default: 0
    },
    jollyroger:{
        type: String,
        default: ""
    },
    jollyrogertwo:{
        type: String,
        default: ""
    },
    phrase: {
        type: String,
        default: "I like rum!"
    },
    treasure: {
        type: Number,
        default: 0
    },
    image:{
        type: String
    },
    attributes:{
        type: Array,
        default: "man"
    },
    pegLeg:{
        type: Number,
        default:0
    },
    eyePatch:{
        type: Number,
        default:0
    },
    hook:{
        type: Number,
        default:0
    },
    featurePegleg:{
        type: Boolean,
        default:false
    },
    featurePatch:{
        type: Boolean,
        default:false
    },
    featureHook:{
        type: Boolean,
        default:false
    },
    featureRum:{
        type: Boolean,
        default:false
    },
    featureTreasure:{
        type: Boolean,
        default:false
    },
    likes:{
        type: Number,
        default: 0
    },
    mates:{
        type:Array,
        default: 0
    }
},{timestamps:true});

const Pirates = mongoose.model('Pirates', PirateSchema);

module.exports = Pirates;