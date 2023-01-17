import {Router} from 'express';
import { createUser, getUserById, getUsers, login, loginUser, register } from '../controllers/users.controller';
const router = Router()

// router.get("/Users", getUsers)

// router.post("/Users", createUser)
router.post('/register', register)

router.post('/login', login)

// router.post("/Users/Login", loginUser)

// router.get("/Users/:correo", getUserById)

// router.delete("/Users")

// router.put("/Users")



export default router