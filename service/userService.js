import { userDao } from "../dao/userDao.js";

const createUser = async ({ username, email, password, address, avatar }) => {
  await userDao.createUser({ username, email, password, address, avatar });
  return { username, email, password, address, avatar };
};

const getUserById = async(userId) =>{

  const user = await userDao.getUserById(userId);
  //console.log("datos usuario service", data)
  return user

}

export const userService = { createUser, getUserById };
