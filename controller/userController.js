import { WSresponse } from "../libs/WSresponse.js";
import {userService} from "../service/userService.js";

const createUser = async (req, res) => {
  try {
    const response = await userService.createUser(req.body);
    res.json(new WSresponse(response, "User created"));
  } catch (err) {
    res.json(new WSresponse(null, "Error creating user", err, 500));
  }
};



const getUserById = async (req, res) => {
  try {
    const response = await userService.getUserById(req.params.id);
    res.json(new WSresponse(response, "User finded"));
  } catch (err) {
    res.json(new WSresponse(null, "Error creating user", err, 500));
  }
};

export const userController = { 
  createUser, 
  getUserById,
  //login
};


/*
archivo nuevo
import userService from "../service/user.service.js";

const createUser = async (req, res) => {
  try {
    const createdUser = await userService.createUser(req);
    return JSON.parse(createdUser)
  } catch (err) {
    console.log(err);
    if (err.statusCode) {
      return res.status(err.statusCode).send(err);
    }

    res.sendStatus(500);
  }
};

const getOneUser = async (req, res) => {
  try {
    const filters = { _id: req.params.id };
    const user = await userService.getUserOneByFilter(filters);

    res.json(user);
  } catch (err) {
    console.log(err);
    if (err.statusCode) {
      return res.status(err.statusCode).send(err);
    }

    res.sendStatus(500);
  }
};

const login = async (req, res) => {
  try {
    const token = await userService.login(req.body);
    console.log(token);
    res.json({ token });
  } catch (err) {
    console.log(err);
    if (err.statusCode) {
      return res.status(err.statusCode).send(err);
    }

    res.sendStatus(500);
  }
};

export default { createUser, getOneUser,login };
*/
