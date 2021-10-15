const mongoose = require('mongoose')


const locationSchema = mongoose.Schema({
    longitude: {
        type: String,
        required: true
    },
    lattitude: {
        type: String,
        required: true
    }
},{timeStamps:true})
const FeedbackSchema = mongoose.Schema({

    name :{
        type: String,
        required: true
    },
   email:{
     type: String,
     required: true
   },
    description:{
        type: String,
        required: true
    },
    value:{
      type: Number,
      required: true
    },

    locations:[locationSchema],

    createdAt:{
        type: Date,
        default: Date.now()
    },
    updatedAt:{
        type: Date,
        default: Date.now()
    }
},{timeStamps:true});

const Feedback = mongoose.model('Feedback',FeedbackSchema);


module.exports = Feedback;

