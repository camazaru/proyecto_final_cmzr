import { Router } from "express";
import { userLoggedController } from "../controller/indexController.js";
//import roleChecker from "../middlewares/roleChecker.js";

const userLoggerRoute= Router();

userLoggerRoute
  .route("/")
  .get(userLoggedController)

export default userLoggerRoute;