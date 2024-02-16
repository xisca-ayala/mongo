const mongoose = require("mongoose");


const teachersSchema = new mongoose.Schema({
    firstName: String, 
    lastName: String,
    group: [String]
});

const subjectsSchema = new mongoose.Schema({
    title: String,
    teachers: [teachersSchema]
});

const marksSchema = new mongoose.Schema({
    date: Date,
    mark: Number, 
    subject: subjectsSchema
});


const studentsSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    marks: [marksSchema]
});

module.exports = mongoose.model("academia", studentsSchema, "academia");