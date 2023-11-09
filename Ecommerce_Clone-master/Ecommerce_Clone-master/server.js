import express from "express";
import dotenv from "dotenv"
import { Connection } from "./database/db.js";
import DefaultData from "./default.js";
import router from "./routes/routes.js";
import cors from "cors";
import bodyparser from "body-parser";
import path from "path";
import {v4 as uuid } from "uuid";
const __dirname=path.resolve();


const app=express();

dotenv.config();

app.use(cors());
app.use(bodyparser.json({extended:true}));
app.use(bodyparser.urlencoded({extended:true}));

app.use('/',router);
const userName=process.env.USER;
const password=process.env.PASSWORD;

const URL=process.env.MONGODB_URI || `mongodb+srv://${userName}:${password}@cluster0.1jgckmq.mongodb.net/ecommerceDB`;
const PORT=process.env.port || 8000;

Connection(URL);

//static files 
app.use(express.static(path.join(__dirname,"./client/build")));

app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"./client/build/index.html"));
})



  
app.listen(PORT,function(){
    console.log(`server started at port ${PORT}`);
})

DefaultData();

export let paytmMerchantKey=process.env.PAYTM_MERCHANT_KEY;

export let paytmParams={};
paytmParams["MID"]=process.env.PAYTM_MID;
paytmParams["WEBSITE"]=process.env.PAYTM_WEBSITE;
paytmParams["CHANNEL_ID"]=process.env.PAYTM_CHANNEL_ID;
paytmParams["INDUSTRY_TYPE_ID"]=process.env.PAYTM_INDUSTRY_TYPE_ID;
paytmParams["ORDER_ID"]=uuid();
paytmParams["CUST_ID"]=process.env.PAYTM_CUST_ID;
paytmParams["TXN_AMOUNT"]="100";
paytmParams["CALLBACK_URL"]="https://ecommerce-clone-b7yo.onrender.com/callback";
paytmParams["EMAIL"]="rideryashk@gmail.com";
paytmParams["MOBILE_NO"]="1234567890";










