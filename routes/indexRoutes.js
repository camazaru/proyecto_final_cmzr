import { Router } from "express";
import productRouter from "./productsRoute.js";
import loginRoute from "./loginRoute.js"
import userLoggerRoute from "./userLoggedRoute.js"
import userRoute from "./userRoute.js"
//import cartRoute from "./cartRoutes.js";

const router = Router()


router.use("/product", productRouter )

router.use("/login", loginRoute)

router.use("/user", userRoute)

router.use("/", userLoggerRoute)

//router.use("/cart", cartRoute)



//router.use("/user", userRouter);

export default router;


