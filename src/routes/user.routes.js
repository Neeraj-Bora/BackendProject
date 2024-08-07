import {Router} from 'express'
import { registerUser } from '../controlleers/user.controller';

const router = Router();

router.route("/register").post(registerUser)

export default router