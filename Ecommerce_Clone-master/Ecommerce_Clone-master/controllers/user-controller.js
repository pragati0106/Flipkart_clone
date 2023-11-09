import User from "../model/user-schema.js"
export const userSignup= async (req,res)=>{
   try{
        const exist =await User.findOne({username:req.body.username});
        if(exist){
            return res.status(401).json({message:"Username already exist"});
        }
        const data=req.body;
        const newUser=new User(data);
        await newUser.save();
        res.status(200).json({message:"User created succesfully"});
   }catch(error){
          console.log(error);
        res.status(500).json({message:error.message});
   }
}

export const userLogin=async (request,response)=>{
     try{
          const username=request.body.username;
          const password=request.body.password;

          let user=await User.findOne({username:username,password:password});

          if (user){
               return response.status(200).json({data:user});
          }else{
               return response.status(401).json("invalid login");
          }

     }catch(error){
          response.status(500).json("Error",error.message);
     }
}