import { Router } from "express";
import {userController} from "../controller/indexController.js";

const router = Router();

router.route("/").post(userController.createUser);

router
  .route("/:id")
  .get(userController.getUserById)

export default router;