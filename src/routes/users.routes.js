import {Router} from 'express';
import { deleteUser, getUsersMongo } from '../controllers/users.controller';
const router = Router()

router.get('/',getUsersMongo)
router.post("/", deleteUser)

export default router