const mongoose = require('mongoose')
const Schema = mongoose.Schema
const {v1} = require("uuid")


const urlSchema  = new Schema({ 
    originalUrl: {
        type: String,
        required: true,
        // GeneratedUrl: String,
    },

    UserId: {
        type: mongoose.Types.ObjectId, 
        required: true, 
        default: () => new mongoose.Types.ObjectId()
    },

    shortUrl: {
        type: String,
        unique: true,
        default: () =>`http://localhost:3001/api/geturl/${v1()}`,
    },

    GeneratedUrl:{
        type: String,
        required: true,
        default: 0
    },
});
   
module.exports = mongoose.model('Url', urlSchema);

