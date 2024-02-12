const mongoose = require("mongoose");
const Profile = require("./profile");
const User = require("./user");
const Credentials = require("./credentials");

mongoose.connect('mongodb+srv://xiscaayala:Xismaygi86!@mongonube.e1bi7ij.mongodb.net/Codenotch');

let userDocument = new User({
    login: "Paulopez",
    password: "PauLopez23!"
})

userDocument.save()
.then((data) => {
    console.log(data);
})
.catch((err) => {
    console.error(err);
})

let credentialsDocument = new Credentials({
    address: "c/Marina, 35",
    phone: "890278902",
    email: "pau@gmail.com"

})

credentialsDocument.save()
.then((data) => {
    console.log(data);
})
.catch((err) => {
    console.error(err);
})


let profileDocument = new Profile({
    name: "Pau",
    surname: "Lopez",
    dateOfBirth: "1990-05-10",
    comments: "lo que sea",
    rol: "estudiante"
})

profileDocument.save()
.then((data) => {
    console.log(data);
})
.catch((err) => {
    console.error(err);
})

