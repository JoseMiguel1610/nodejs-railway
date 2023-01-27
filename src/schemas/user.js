// import mongoose from 'mongoose';
const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    correo: {
        type: String,
        require: true,
        min: 6,
        max: 255
    },
    nombres: {
        type: String,
        require: true,
        min: 6,
        max: 255
    },
    apellidoPaterno: {
        type: String,
        require: true,
        min: 6,
        max: 255
    },
    apellidoMaterno: {
        type: String,
        require: true,
        min: 6,
        max: 255
    },
    password: {
        type: String,
        require: true,
        minlength: 6
    },
    fechaNacimiento: {
        type: Date,
        default: Date.now
    },
    sexo: {
        type: String,
        require: true,
        min: 1,
        max: 255
    },
    celular: {
        type: String,
        require: true,
        min: 9,
        max: 9
    },
    token: {
        type: String,
        require: true,
    },
    rol: {
        type: mongoose.Types.ObjectId,
    }
})

module.exports = mongoose.model("usuarios", userSchema);