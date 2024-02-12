const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
    name: String,
    surname: String, 
    dateOfBirth: Date,
    comments: String, 
    rol: {
        type: String,
        enum: ['estudiante', 'profesor']
    }
})

module.exports = mongoose.model("Profile", ProfileSchema, "profile");