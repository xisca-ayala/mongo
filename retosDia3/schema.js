const mongoose = require("mongoose");

const TeachersSchema = new mongoose.Schema({
    teacher_first_name:String, 
    teacher_last_name: String, 
})

const NotasSchema = new mongoose.Schema({
    date: {
        type: Date, 
        required: [true, "El campo es obligatorio"]
    },
    mark: {
        type: Number,
    },
    student_first_name: {
        type: String, 
    },
    student_last_name: {
        type: String, 
    },
    gropu_name: {
        type: String, 
    },
    subject_name: {
        type: String,
    },
    teachers: {
        type: [TeachersSchema],
    },
})

module.exports = mongoose.model("Notas", NotasSchema, "notas");