import { Router } from 'express'
import { getAllTeams, getTeamById, createTeam, removeTeam, teamEdit } from '../controllers/teams.controllers'
import { checkToken } from '../middlewares/checkToken.middlewares'

const router = Router()

router.get('/', getAllTeams)
router.get('/:id', getTeamById)
router.post('/', checkToken, createTeam)
router.put('/:id', teamEdit)
router.delete('/:id', removeTeam)

export default router
