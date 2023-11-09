import { products } from "./constants/data.js";
import Product from "./model/product_schema.js";

const DefaultData= async()=>{
    try{
        await Product.insertMany(products);
        console.log("Data Imported Successfully");
    }catch(err){
        console.log("error while inserting default data",err.message);
    }
}

export default DefaultData;