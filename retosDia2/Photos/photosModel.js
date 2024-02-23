const mongoose = require("mongoose");
const Photos = require("./photosSchema");

mongoose.connect('mongodb+srv://xiscaayala:Xismaygi86!@mongonube.e1bi7ij.mongodb.net/Photos');

 

const createPhotoDoc = (userData) =>{
    let photoDocument = new Photos(userData); 
    photoDocument.save()
    .then((data)=> {
        console.log(data);
        mongoose.disconnect();
    })
    .catch((err)=>{
        console.error(err);
    })
}

const getPhotoDoc = (user) => {
   Photos.find({user})
   .then((data)=>{
        console.log(data);
        mongoose.disconnect();
   })
    .catch((err)=>{
        console.error(err);
    })
}

 const updatePhotosDesc = (user, description, new_description)=> {
    Photos.updateOne({user,description},
    {$set:{description:new_description, verified: false}})
     .then((data)=>{
         console.log("Se ha modificado correctamente");
         console.log(data);
            mongoose.disconnect(); 
    })
     .catch((err)=>{
         console.error(err);
     })
}

const deletePhoto = (user, title)=> {
    Photos.deleteOne({user, title})
    .then((data)=>{
        console.log("Se ha eliminado correctamente la photo");
        console.log(data);
        mongoose.disconnect(); 
    })
    .catch((err)=>{
        console.error(err);
    })
}

const deletePhotos = (user)=> {
    Photos.deleteMany({user})
    .then((data)=>{
        console.log("Se han eliminado correctamente las photos");
        console.log(data);
        mongoose.disconnect(); 
    })
    .catch((err)=>{
        console.error(err);
    })
}



let userData1 = {
    user: "Maria",
    photo: "volcà.jpg",
    title: "Volcà",
    description: "Volcà"
};
let userData2 = {
    user: "Pep",
    photo: "llac.jpg",
    title: "Llac",
    description: "Llac"
};
let userData3 = {
    user: "Llucia",
    photo: "tormenta.jpg",
    title: "Tormenta",
    description: "Tormenta"
};
let userData4 = {
    user: "Pixeris",
    photo: "nuvols.jpg",
    title: "Núvols",
    description: "Núvols"
};

createPhotoDoc(userData1);
createPhotoDoc(userData2);
createPhotoDoc(userData3);
createPhotoDoc(userData4);

getPhotoDoc("Llucia"); 
updatePhotosDesc("Pixeris, Núvols, Núvols negres");
deletePhoto("Pep", "Llac"); 
deletePhotos("Maria"); 



