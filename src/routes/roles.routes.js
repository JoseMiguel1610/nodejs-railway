const {Router} = require("express")
// import {Router} from 'express';
const rolesController = require('../controllers/roles.controller')
// import { getRoles, registerRoles } from '../controllers/roles.controller';
// import roles from '../schemas/roles';
const router = Router()

router.get('/', rolesController.getRoles)
router.post('/', rolesController.registerRoles)

module.exports = router