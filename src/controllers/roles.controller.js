// import { getConnection, sql, querys } from "../database";
const Rol = require('../schemas/roles')
// import Rol from '../schemas/roles';

const rolesController = {
    registerRoles: async (req, res) => {
        const rol = new Rol({
            id: req.body.id,
            descripcion: req.body.descripcion
        });
        try {
            const savedRol = await rol.save()
            res.json({
                error: null,
                data: savedRol,
                status: 200
            })
        } catch (error) {
            res.status(400).json({ error, status: 400 })
        }

    },
    getRoles: async (req, res) => {
        const roles = await Rol.find();
        res.json({
            error: null,
            data: roles,
            status: 200
        })
    }
}

module.exports = rolesController