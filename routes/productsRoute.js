import { Router } from "express";
import {productController} from "../controller/indexController.js";
//import roleChecker from "../middlewares/roleChecker.js";

const productRouter  = Router();

productRouter
  .route("/")
  .get(productController.getAllProducts)


export default productRouter;