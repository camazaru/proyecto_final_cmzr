import { Router } from "express";
import productRouter from "./productsRoute.js";
import loginRoute from "./loginRoute.js"
import userLoggerRoute from "./userLoggedRoute.js"

const router = Router()


router.use("/product", productRouter )

router.use("/login", loginRoute)

router.use("/", userLoggerRoute)



//router.use("/user", userRouter);

export default router;


