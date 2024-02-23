const mongoose = require("mongoose");
const Notas = require("./schema");

mongoose.connect('mongodb+srv://xiscaayala:Xismaygi86!@mongonube.e1bi7ij.mongodb.net/Notas');

const createDocument = (userData) =>{
    let document = new Notas(userData); 
    document.save()
    .then((data)=> {
        console.log(data);
    })
    .catch((err)=>{
        console.error(err);
    })
}

const notaMedia =(subjectName) =>{
    Notas
    .aggregate([{$match: { "subject_name": subjectName}},
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
    .aggregate([{$group: { "_id":"$student_first_name", "cantidad": {$sum:1} }}])
    .then((result)=>{
        console.log(result);
    })
    .catch((err)=>{
        console.error(err);
    })
};

// const listarAlumnos = () =>{
//     Notas
//     .aggregate([{$group:{"_id":{student_first_name:"$student_first_name", 
//     student_last_name:"$student_last_name"}},
//                 "Cantidad":{$sum:1}},
//             { $project:{"_id": 0,
//                         "Nombre": "$_id",
//                         "Cantidad":1}}
//             ])
//     .then((result)=>{
//         console.log(result);
//     })
//     .catch((err)=>{
//         console.error(err);
//     })
// };

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

const gruposAlumnos = () =>{
    Notas
    .aggregate([{$group:{"_id": "$group_name",
                         "Cantidad":{$sum:1}}},
                {$sort:{_id:-1}}])
    .then((result)=>{
        console.log(result);
    })
    .catch((err)=>{
        console.error(err);
    })
};

const asignaturasTop = (notaMedia, limit) =>{
    Notas
    .aggregate([{$group:{"_id": "$subject_name",
                         notaMedia:{$avg:"$mark"}}},
                {$match:{notaMedia: {$gt:notaMedia}}},
                {$sort:{notaMedia:-1}},
                {$limit: limit}])
    .then((result)=>{
        console.log(result);
    })
    .catch((err)=>{
        console.error(err);
    })
};

const numeroProfesores = () =>{
    Notas
    .aggregate([{$unwind:"$teachers"},
                {$group:{"_id":{asignatura:"$subject_name", 
                profesor:{
                    nombre: "$teachers.teacher_first_name",
                    apellido: "$teachers.teacher_last_name"
                }},
                numeroProfesores: {$sum:1}}}])
    .then((result)=>{
        console.log(result);
        mongoose.disconnect();
    })
    .catch((err)=>{
        console.error(err);
    })
};


let userData = {
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

let userData2 = {
    date: "2023-10-05",
    mark:9, 
    student_first_name: "Mireia",
    student_last_name: "Flaquer",
    group_name: "2A",
    subject_name: "Maquetació",
    teachers: [{
        teacher_first_name: "Lola",
        teacher_last_name:"Martí"
    }]
};



createDocument(userData1); 
createDocument(userData2);
notaMedia("Javascript"); 
totalAlumnos(); 
// listarAlumnos(); 
listarProfesores(); 
gruposAlumnos(); 
asignaturasTop(5,5);
numeroProfesores(); 





    


