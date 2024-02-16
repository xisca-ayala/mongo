const mongoose = require("mongoose");
const Photos = require("./photosSchema");

mongoose.connect('mongodb+srv://xiscaayala:Xismaygi86!@mongonube.e1bi7ij.mongodb.net/Photos');

 

// const createPhotoDoc = () =>{
//     let data = {
//         user: "Maria",
//         photo: "terrmoto.jpg",
//         title: "Terremoto",
//         description: "Terremoto"
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

//  const updatePhotosDesc = ()=> {
//     Photos.updateOne({user: "Pepe",description: "romantico paisaje"},
//     {description:"frio paisaje", verified: false})
//      .then((data)=>{
//          console.log("Se ha modificado correctamente");
//          console.log(data);
//             mongoose.disconnect(); 
//     })
//      .catch((err)=>{
//          console.error(err);
//      })
// }

// const deletePhoto = ()=> {
//     Photos.deleteOne({user: "Pepa", title: "Gato Andando"})
//     .then((data)=>{
//         console.log("Se ha eliminado correctamente la photo");
//         console.log(data);
//         mongoose.disconnect(); 
//     })
//     .catch((err)=>{
//         console.error(err);
//     })
// }

// const deletePhotos = ()=> {
//     Photos.deleteMany({user: "Maria"})
//     .then((data)=>{
//         console.log("Se han eliminado correctamente las photos");
//         console.log(data);
//         mongoose.disconnect(); 
//     })
//     .catch((err)=>{
//         console.error(err);
//     })
// }


// createPhotoDoc();
// getPhotoDoc(); 
// updatePhotosDesc();
// deletePhoto(); 
// deletePhotos(); 



