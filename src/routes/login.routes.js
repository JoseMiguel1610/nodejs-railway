const {Router} = require("express")
// import {Router} from 'express';
const usersControllers = require('../controllers/users.controller')
// import { createUser, getUserById, getUsers, login, loginUser, register } from '../controllers/users.controller';
const router = Router()

// router.get("/Users", getUsers)

// router.post("/Users", createUser)
router.post('/register', usersControllers.register)

router.post('/login', usersControllers.login)

// router.post("/Users/Login", loginUser)

// router.get("/Users/:correo", getUserById)

// router.delete("/Users")

// router.put("/Users")



module.exports = router