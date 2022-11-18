import { Router } from 'express'
import { createMatch, getAllMatchs, getMatchById } from '../controllers/matchs.controllers'
import { checkToken } from '../middlewares/checkToken.middlewares'

const router = Router()

router.get('/', getAllMatchs)
router.get('/:id', getMatchById)
router.post('/', checkToken, createMatch)

export default router
