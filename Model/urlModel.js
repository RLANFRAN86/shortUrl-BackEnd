const mongoose = require('mongoose')
const Schema = mongoose.Schema
const {v1} = require("uid")


const urlSchema  = new Schema({ 
    originalUrl: {
        type: String,
        required: true,
        GeneratedUrl: String,
    },

    shortUrl: {
        type: String,
        unique: true,
        default: ()=>`http://localhost:3001/api/geturl/${v1()}`,
    },

    GeneratedUrl:{
        type: String,
        required: true,
        default: 0
    },

    GeneratedUrl: {
        type: String, 
        ref: "User",
        default: null
    },

    uid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});
   
module.exports = mongoose.model('Url', urlSchema);

