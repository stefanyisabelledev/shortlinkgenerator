const mongoose = require('mongoose');
module.exports = new mongoose.Schema({
    _id:{
        type: mongoose.SchemaTypes.ObjectId,
        default: null
    },
    identifier:{
        type: String,
        required: true,
        unique: true,
        index: true,
    },
    url:{
        type: String,
        required:true,
    },
    createdAt:{
        type: Date,
        default: new Date()
    },
    updatedAt:{
        type: Date,
        default: new Date()
    }
})