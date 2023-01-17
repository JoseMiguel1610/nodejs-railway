const {Router} = require("express")
// import {Router} from 'express';
const usersControllers = require('../controllers/users.controller')
// import { deleteUser, getUsersMongo } from '../controllers/users.controller';
const router = Router()

router.get('/', usersControllers.getUsersMongo)
router.post("/", usersControllers.deleteUser)

module.exports = router