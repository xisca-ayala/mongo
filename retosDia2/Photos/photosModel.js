const mongoose = require("mongoose");
const Photos = require("./photosSchema");

mongoose.connect('mongodb+srv://xiscaayala:Xismaygi86!@mongonube.e1bi7ij.mongodb.net/Photos');

 

// const createPhotoDoc = () =>{
//     let data = {
//         user: "Pepe",
//         photo: "bla bal bala",
//         title: "puesta de sol",
//         description: "romantico paisaje"
//     };

//     let photoDocument = new Photos(data); 

//     photoDocument.save()
//     .then((data)=> {
//         console.log(data);
//         mongoose.disconnect();
//     })
//     .catch((err)=>{
//         console.error(err);
//     })
// }

// const getPhotoDoc = () => {
//    Photos.find({user:"Pepe"})
//    .then((data)=>{
//         console.log(data);
//         mongoose.disconnect();
//    })
//     .catch((err)=>{
//         console.error(err);
//     })
// }

// const updatePhotosDesc = ()=> {
//     Photos.updateOne({user: "Pepe",description: "romantico paisaje"},
//     {description:"frio paisaje", veified: false})
//     .then((data)=>{
//         console.log("Se ha modificado correctamente");
//         console.log(data);
//     })
//     .catch((err)=>{
//         console.error(err);
//     })
// }

const deletePhotosDoc = ()=> {
    Photos.updateOne({user: "Pepe",description: "romantico paisaje"},
    {description:"frio paisaje", veified: false})
    .then((data)=>{
        console.log("Se ha modificado correctamente");
        console.log(data);
    })
    .catch((err)=>{
        console.error(err);
    })
}





// createPhotoDoc();
// getPhotoDoc(); 
// updatePhotosDesc();


