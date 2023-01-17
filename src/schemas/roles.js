// import mongoose from 'mongoose';
const mongoose = require("mongoose")

const rolesSchema = mongoose.Schema({
    descripcion: {
        type: String,
        require: true,
        min: 6,
        max: 255
    }
})

module.exports = mongoose.model("roles", rolesSchema);