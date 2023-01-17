import mongoose from 'mongoose';

const rolesSchema = mongoose.Schema({
    descripcion: {
        type: String,
        require: true,
        min: 6,
        max: 255
    }
})

export default mongoose.model("roles", rolesSchema);