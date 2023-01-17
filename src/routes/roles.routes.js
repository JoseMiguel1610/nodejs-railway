import {Router} from 'express';
import { getRoles, registerRoles } from '../controllers/roles.controller';
import roles from '../schemas/roles';
const router = Router()

router.get('/', getRoles)
router.post('/', registerRoles)

export default router