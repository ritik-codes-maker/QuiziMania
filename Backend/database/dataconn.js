import mongoose from "mongoose";

export default async function connect(){
    try{
       const res = await mongoose.connect(process.env.ATLAS_URI);
       if(res){
         console.log("Mongodb connected successfully ");
       }
    }catch(err){
        console.log("error occured while setting mongodb", err);
        throw err;
    }
}