import { Router } from "express";
import {productController} from "../controller/indexController.js";
//import roleChecker from "../middlewares/roleChecker.js";

const productRouter  = Router();

productRouter
  .route("/")
  .get(productController.getAllProducts)
  .post(productController.createProduct);
 
  productRouter
  .route("/:id")
  .get(productController.getOneProduct)
  .put(productController.updateProduct)
  .delete(productController.deleteProduct);

export default productRouter;