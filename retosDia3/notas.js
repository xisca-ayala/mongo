const mongoose = require("mongoose");
const Notas = require("./schema");

mongoose.connect('mongodb+srv://xiscaayala:Xismaygi86!@mongonube.e1bi7ij.mongodb.net/Notas');



const createDocument = () =>{
    let data = {
        date: "2023-12-05",
        mark:9, 
        student_first_name: "Laia",
        student_last_name: "Gili",
        group_name: "3A",
        subject_name: "Javascript",
        teachers: [{
            teacher_first_name: "Lola",
            teacher_last_name:"Martí"
        }]
    };
    let document = new Notas(data); 
    document.save()
    .then((data)=> {
        console.log(data);
        mongoose.disconnect();
    })
    .catch((err)=>{
        console.error(err);
    })
}


createDocument(); 