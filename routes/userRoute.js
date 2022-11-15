import { Router } from "express";
import {userController} from "../controller/indexController.js";

const router = Router();

router.post("/", userController.createUser);
router.get("/:id", userController.getUserById);



export default router;



/*
simon
import { Router } from "express";
import userController from "../controllers/user.controller.js";

const router = Router();

router.post("/", userController.createUser);
router.get("/:id", userController.getOneUser);
router.post("/login", userController.login);

export default router;
*/