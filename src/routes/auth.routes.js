import { Router } from 'express'
import { signIn, signUp } from '../controllers/auth.controllers'

const router = Router()

router.get('/', signIn)
router.post('/', signUp)

export default router
