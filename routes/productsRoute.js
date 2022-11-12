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


/*

simon
import { Router } from "express";
import productController from "../controllers/product.controller.js";
import jwt from "../utils/jwt.js";

const router = Router();
const idRouter = Router({mergeParams: true});
const categoriaRouter = Router({mergeParams: true});


// you can nest routers by attaching them as middleware:
router.use('/categoria/:categoria', categoriaRouter);
router.use('/:id', idRouter);

router
  .route("/")
  .get(productController.getAllProduct)
  .post(jwt.authMiddleware, productController.createProduct);
idRouter.route("/").get( productController.getProductByFilters);
categoriaRouter.route("/").get( productController.getProductByFilters);

export default router;
*/