const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    login: {
        type: String, 
        required: [true, "El campo es obligatorio"]
    },
    password: {
        type: String,
        required: [true, "El campo es obligatorio"],
        validate: [
            function(password){
                return password.length >=8;
            },
            "El password debe tenir almenos 8 carácteres"],
    }
})

UserSchema.pre('save', async function(next){
        if(this.password.length <= 8){
            console.log('El password debe tener almenos 8 carácteres');
            next();
        } else{
            console.log('Password valido');
        }
})

module.exports = mongoose.model("User", UserSchema, "user");