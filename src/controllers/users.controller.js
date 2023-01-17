import { getConnection, sql, querys } from "../database";
import bcrypt from 'bcrypt';
import Joi from '@hapi/joi';
import User from '../schemas/user';
import Rol from '../schemas/roles';
import jwt from 'jsonwebtoken';

const schemaLogin = Joi.object({
    correo: Joi.string().min(6).max(255).required().email(),
    password: Joi.string().min(6).max(1024).required()
})

const schemaRegister = Joi.object({
    correo: Joi.string().min(6).max(255).required().email(),
    nombres: Joi.string().min(6).max(255).required(),
    apellidoPaterno: Joi.string().min(6).max(1024).required(),
    apellidoMaterno: Joi.string().min(6).max(1024).required(),
    password: Joi.string().min(6).max(1024).required(),
    fechaNacimiento: Joi.date().iso().required(),
    sexo: Joi.string().min(1).max(1024).required(),
    celular: Joi.string().min(9).max(9).required(),
    rol: Joi.string().required()
})

export const getUsers = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(querys.getAllUsers)
        res.json(result.recordset)
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
}

export const loginUser = async (req, res) => {
    const { error } = schemaLogin.validate(req.body)
    if (error) return res.status(400).json({ error: error.details[0].message, status: 400 })
    const pool = await getConnection()
    const result = await pool.request()
        .input('correo', req.body.correo)
        .query(querys.getUserCorreo)
    const user = result.recordset
    if (user.length <= 0) return res.status(400).json({ error: 'Usuario no encontrado', status: 400 })

    const validPassword = await bcrypt.compare(req.body.password, user[0].password)
    if (!validPassword) return res.status(400).json({ error: 'Constraseña invalida', status: 400 })
    console.log("res: ", res);
    res.json({ user: user[0], status: 200 })
}

export const createUser = async (req, res) => {
    var { password } = req.body
    const { nombres, apellidoPaterno, apellidoMaterno, sexo, celular, correo } = req.body
    if (nombres == null || apellidoPaterno == null || apellidoMaterno == null || password == null || sexo == null || celular == null || correo == null) {
        return res.status(400).json({ msg: "Bad Request" })
    }
    const salt = await bcrypt.genSalt(10)
    password = await bcrypt.hash(req.body.password, salt)
    try {
        const pool = await getConnection()
        await pool.request()
            .input('nombres', sql.VarChar, nombres)
            .input('apellidoPaterno', sql.VarChar, apellidoPaterno)
            .input('apellidoMaterno', sql.VarChar, apellidoMaterno)
            .input('password', sql.Char, password)
            .input('sexo', sql.NChar, sexo)
            .input('celular', sql.VarChar, celular)
            .input('correo', sql.VarChar, correo)
            .query(querys.createUsers)
        res.json({ nombres, apellidoMaterno, apellidoMaterno, apellidoMaterno, sexo, celular, correo })
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
}

export const getUserById = async (req, res) => {
    const { correo } = req.params
    const pool = await getConnection()
    const result = await pool.request()
        .input('correo', correo)
        .query(querys.getUserCorreo)
    res.send(result.recordset[0])
}

export const register = async (req, res) => {

    const { error } = schemaRegister.validate(req.body)
    console.log(error);

    if (error) {
        return res.status(400).json(
            { error: error.details[0].message, status: 400 }
        )
    }

    const isEmailExist = await User.findOne({ correo: req.body.correo });
    if (isEmailExist) {
        return res.status(400).json(
            { error: 'Email ya registrado', status: 400 }
        )
    }

    const salt = await bcrypt.genSalt(10)
    const password = await bcrypt.hash(req.body.password, salt)

    const user = new User({
        correo: req.body.correo,
        nombres: req.body.nombres,
        apellidoPaterno: req.body.apellidoPaterno,
        apellidoMaterno: req.body.apellidoMaterno,
        password: password,
        fechaNacimiento: req.body.fechaNacimiento,
        sexo: req.body.sexo,
        celular: req.body.celular,
        rol: req.body.rol
    });
    try {
        const savedUser = await user.save()
        res.json({
            error: null,
            data: savedUser,
            status: 200
        })
    } catch (error) {
        res.status(400).json({ error, status: 400 })
    }

}

export const login = async (req, res) => {
    // Validaciones de login
    const { error } = schemaLogin.validate(req.body)
    if (error) return res.status(400).json({ error: error.details[0].message, status: 400 })

    // Validaciond e existencia
    let user = await User.aggregate(
        [
            {
                $lookup:
                {
                    from: "roles",
                    localField: "rol",
                    foreignField: "_id",
                    as: "usuarioRol"
                }
            },
            { $unwind: "$usuarioRol"},
            { $match: { correo: req.body.correo}}
        ]
    )
    user = user[0]
    console.log(user);
    if (!user) return res.status(400).json({ error: 'Usuario no encontrado', status: 400 })

    // Validacion de password en la base de datos
    const validPassword = await bcrypt.compare(req.body.password, user.password)
    if (!validPassword) return res.status(400).json({ error: 'Constraseña invalida', status: 400 })

    console.log(user);
    const token = jwt.sign({
        name: user.nombres,
        id: user._id
    }, process.env.TOKEN_SECRET)

    // Colocando el token en el header y el cuerpo de la respuesta
    res.header('auth-token', token).json({
        error: null,
        data: { token, user },
        message: 'Bienvenido',
        status: 200
    })
}

export const getUsersMongo = async (req, res) => {
    const users = await User.aggregate(
        [
            {
                $lookup:
                {
                    from: "roles",
                    localField: "rol",
                    foreignField: "_id",
                    as: "usuarioRol"
                }
            },
            { $unwind: "$usuarioRol"}
        ]
    )
    res.json({
        error: null,
        data: users,
        status: 200
    })
    
    
}

export const deleteUser = async (req, res) => {
    const user = await User.deleteOne({ correo: req.body.correo })
    res.json({
        error: null,
        data: user,
        status: 200
    })
}