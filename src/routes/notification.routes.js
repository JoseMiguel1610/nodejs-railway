const {Router} = require("express")
// import {Router} from 'express';
const notificationController = require('../controllers/notification.controller')
// import { getRoles, registerRoles } from '../controllers/roles.controller';
// import roles from '../schemas/roles';
const router = Router()

router.post("/:correo", notificationController.sendNotification)

module.exports = router