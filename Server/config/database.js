const mongoose=require("mongoose");
require("dotenv").config();

exports.connect=()=>{
    
    mongoose.connect(process.env.MONGODB_URL,{
    })
    .then(()=>console.log("DB connected Successfully"))
    .catch((error)=>{
        console.log("DB is disconnect ")
       console.error(error)
       process.exit(1)
    })
}