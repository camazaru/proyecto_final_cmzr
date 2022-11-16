import { Router } from "express";
//import {orderController} from "../controller/indexController.js";
import jwt from "../utils/jwt.js"

const orderRoute  = Router();

orderRoute
  .route("/")
  .post(orderController.createOrder);
 
  orderRoute
  .route("/:id")
  .get(orderController.orderData)


export default orderRoute;

/*
archivo nuevo
import { Router } from "express";
import ordenController from "../controllers/orden.controller.js"
import jwt from "../utils/jwt.js";

const router = Router();

router.route('/')
.post(ordenController.createOrden)

router.route('/:idusuario').get(ordenController.datosOrden)

export default router;
*/
