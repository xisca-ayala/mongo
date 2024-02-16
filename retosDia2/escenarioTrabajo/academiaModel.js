const mongoose = require("mongoose");
const Academia = require("./academiaSchema");

mongoose.connect('mongodb+srv://xiscaayala:Xismaygi86!@mongonube.e1bi7ij.mongodb.net/academia');

const createAcademiaDoc = () =>{
    let data = {
        firstName: "Lucas",
        lastName: "Perez",
        marks:[],
    };
    let photoDocument = new Academia(data); 
    photoDocument.save()
    .then((data)=> {
        console.log(data);
        mongoose.disconnect();
    })
    .catch((err)=>{
        console.error(err);
    })
}

createAcademiaDoc();



