import { getConnection, sql, querys } from "../database";
import Rol from '../schemas/roles';

export const registerRoles = async (req, res) => {
    const rol = new Rol({
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

}

export const getRoles = async (req, res) => {
    const roles = await Rol.find();
    res.json({
        error: null,
        data: roles,
        status: 200
    })
}