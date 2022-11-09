import { Router } from "express";
import { loginController } from "../controller/indexController.js";
//import roleChecker from "../middlewares/roleChecker.js";

const loginRoute= Router();

loginRoute
  .route("/")
  .get(loginController)

export default loginRoute;