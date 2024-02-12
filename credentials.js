const mongoose = require("mongoose");

const CredentialsSchema = new mongoose.Schema({
    address: String,
    phone: Number,
    email: {
        type: String,
        minLength:6,
        maxLength:40
    }
})

module.exports = mongoose.model("Credentials", CredentialsSchema, "credentials");