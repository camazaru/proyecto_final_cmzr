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
simon

import userService from "../service/user.service.js";

const createUser = async (req, res) => {
  try {
    const createdUser = await userService.createUser(req.body);

    res.status(201).json(createdUser);
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
*/
