import modelsUser from '../models/modelsUser.js'

const CreateUser= async (req) => {
  const UserRegistered = await modelsUser.create(req)
  return UserRegistered
}

const getUserbyName= async (req) => {
  const username = req
  const user = await modelsUser.findOne(username)
  return user
}

  export default {
    CreateUser,
    getUserbyName
  }