const mongoose = require("mongoose");

const PhotosSchema = new mongoose.Schema({
    user: {
        type: String, 
        required: [true, "El campo es obligatorio"]
    },
    photo: {
        type: String,
    },
    title: {
        type: String, 
    },
    description: {
        type: String,
    }
})

module.exports = mongoose.model("Photos", PhotosSchema, "photos");