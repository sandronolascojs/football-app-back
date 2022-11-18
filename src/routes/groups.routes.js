import { Router } from 'express'
import { createGroup, getAllGroups } from '../controllers/groups.controllers'
import { checkToken } from '../middlewares/checkToken.middlewares'

const router = Router()

router.post('/', checkToken, createGroup)
router.get('/', getAllGroups)
router.get('/:id')
router.delete('/:id')
router.put('/:id')

export default router
