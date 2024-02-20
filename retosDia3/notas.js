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

const notaMedia =() =>{
    Notas
    .aggregate([{$match: { "subject_name": "Javascript"}},
                {$group:{ _id: null, notaMedia: {$avg: "$mark"}}}])
    .then((result)=>{
        console.log(result);
    })
    .catch((err)=>{
        console.error(err);
    })
};

const totalAlumnos =() =>{
    Notas
    .aggregate([{$group: { "_id":"$student_first_name" }, 
                "Cantidad": {$sum:1}}])
    .then((result)=>{
        console.log(result);
    })
    .catch((err)=>{
        console.error(err);
    })
};

const listarAlumnos = () =>{
    Notas
    .aggregate([{$group:{"_id":"$student_first_name" },
                "Cantidad":{$sum:1}},
            { $project:{"Nombre": "$student_first_name",
                        "Cantidad":1}}

            ])
    .then((result)=>{
        console.log(result);
    })
    .catch((err)=>{
        console.error(err);
    })
};

const listarProfesores = () =>{
    Notas
    .aggregate([{$unwind:"$teachers"},
                {$group:{"_id": {teacher_first_name:"$teacher_first_name", 
                                teacher_last_name:"$teacher_last_name"},
                         "Cantidad":{$sum:1}}}])
    .then((result)=>{
        console.log(result);
    })
    .catch((err)=>{
        console.error(err);
    })
}















notaMedia(); 
totalAlumnos(); 
listarAlumnos(); 





    


