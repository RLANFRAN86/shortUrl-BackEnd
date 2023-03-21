const mongoose = require('mongoose')
const Schema = mongoose.Schema
const { v1 } = require("uuid")


const urlSchema = new Schema({

    originalUrl: {
        type: String,
        required: true,
    },

    shortUrl: {
        type: String,
        unique: true,
        default: () => `http://localhost:3001/api/geturl/${v1()}`,
    },

    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },

    GeneratedUrl: {
        type: String,
        required: true,
        default: 0
    },
    
    // userId:{
    //     type: Schema.Types.ObjectId,
    //     req: "User"
    // },

});


module.exports = mongoose.model('Url', urlSchema);

