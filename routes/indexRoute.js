import { Router } from "express";
//import accessRoute from "./accessRoute.js"
//import cartRoute from "./cartRoute.js"
//import chatRoute from "./chatRoute.js"
//import orderRoute from "./orderRoute.js"
import productRoute from "./productRoute.js";
//import registerRoute from "./registerRoute.js"
//import userRoute from "./userRoute.js"
//import cartRoute from "./cartRoutes.js";

const router = Router()

router.use("/product", productRoute )

//router.use("/login", loginRoute)

//router.use("/user", userRoute)



//router.use("/cart", cartRoute)



//router.use("/user", userRouter);

export default router;



/*
archivo nuevo

import { Router } from "express";
import userRoute from "./user.route.js";
import productRoute from "./product.route.js";
import carritoRoute from "./carrito.route.js";
import ordenRoute from "./orden.route.js";
import accessRoute from "./access.route.js";
import registerRoute from "./register.route.js";
import chatRoute from "./chat.route.js";
import checkAuthentication from '../components/CheckAuth.js'

const router = Router();

router.use("/user",userRoute);
router.use("/product",checkAuthentication,productRoute);
router.use("/carrito",checkAuthentication,carritoRoute);
router.use("/orden", checkAuthentication,ordenRoute);
router.use("/login",accessRoute);
router.use("/register",registerRoute);
router.use("/chat",chatRoute);


export default router;
*/


