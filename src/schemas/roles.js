// import mongoose from 'mongoose';
const mongoose = require("mongoose");

const rolesSchema = mongoose.Schema({
    id: {
        type: Number,
        require: true
    },
    descripcion: {
        type: String,
        require: true,
        min: 6,
        max: 255
    }
})

module.exports = mongoose.model("roles", rolesSchema);