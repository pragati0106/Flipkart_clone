import express from "express";
import { userSignup,userLogin } from "../controllers/user-controller.js";
import { getProducts ,getProductById} from "../controllers/product-controller.js";
import { addPaymentGateWay, paytmResponse} from "../controllers/payment-controller.js";

const router=express.Router();

//////post requests/////
router.post("/signup",userSignup);
router.post("/login",userLogin);
router.post("/payment",addPaymentGateWay);
router.post("/callback",paytmResponse)

//////get requests/////

router.get("/products",getProducts);
router.get("/product/:id",getProductById)



export default router;