import mongoose from "mongoose"
mongoose.set('strictQuery', false);
export const Connection=  async(URL)=>{
    try{
        await mongoose.connect(URL,{useNewurlParser:true,useUnifiedTopology:true});
        console.log("Database connected successfully");
    }catch(err){
        console.log(err.message)
    }
}

export default Connection;



