const mongoose = require("mongoose");
const fs = require('fs'); 

const TeachersSchema = new mongoose.Schema({
    first_name: String, 
    last_name: String,
    group: [String]
});

const SubjectsSchema = new mongoose.Schema({
    title: String,
    teachers: [TeachersSchema]
});

const MarksSchema = new mongoose.Schema({
    date: Date,
    mark: Number, 
    subject: SubjectsSchema
});

const StudentsSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    marks: [MarksSchema]
});

let Academia = mongoose.model("Academia", StudentsSchema, "academia");

module.exports = Academia; 
