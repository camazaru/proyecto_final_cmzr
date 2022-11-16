import { Router } from "express";
import {accessController} from "../controller/indexController.js";
import upload from '../MulterFiles/MulterConfig.js';
import passport from 'passport';

const registerRoute = Router();

registerRoute
  .route("/")
  .post(upload.single('avatar'),passport.authenticate("register", { failureRedirect: "/register",failureMessage:{message:"error al registrar"} }),accessController.postLogin)
  .get(accessController.getRegister)

export default registerRoute;










/*

archivo viejo
import { Router } from "express";
import accessController from "../controllers/access.controller.js";
import upload from '../components/MulterConfig.js';
import passport from 'passport';

const router = Router();

router
  .route("/")
  .post(upload.single('avatar'),passport.authenticate("register", { failureRedirect: "/register",failureMessage:{message:"error al registrar"} }),accessController.postLogin)
  .get(accessController.getRegister)

export default router;
*/