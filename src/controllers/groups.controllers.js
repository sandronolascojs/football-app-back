import { responseHandler } from '../middlewares/responseHandler.middlewares'
import Group from '../models/groups.models'
import User from '../models/users.models'

export const getAllGroups = async (req, res, next) => {
  try {
    const groups = await Group.find().populate('teams', {
      _id: 1,
      country: 1,
      img: 1,
      status: 1,
      points: 1
    })

    if (groups.length <= 0) {
      return responseHandler(res, 404, true, 'Groups no found', null)
    }

    return responseHandler(res, 200, false, 'Groups found', groups)
  } catch (err) {
    next(err)
  }
}

export const createGroup = async (req, res, next) => {
  try {
    const { user } = req

    const foundUser = await User.findById(user.id)

    if (foundUser.role !== 'admin') {
      return responseHandler(res, 401, true, 'Unauthorized', null)
    }

    const { name } = req.body

    const searchGroup = await Group.findOne({ name })

    if (searchGroup) {
      return responseHandler(res, 404, true, 'Group already exists', null)
    }

    const groupData = {
      name
    }
    const newGroup = await Group(groupData)
    await newGroup.save()

    const data = {
      id: newGroup._id,
      name: newGroup.name
    }

    return responseHandler(res, 201, false, 'Group created', data)
  } catch (err) {
    next(err)
  }
}
