const express=require("express");
const app=express();

const {connect}=require("./config/database")

require("dotenv").config();
const cookieParser=require("cookie-parser");
const cors=require("cors");


const PORT=process.env.PORT || 4000;
 



//connection with db
connect();


//middlewares
app.use(express.json());
app.use(cookieParser());
// req comes from frontend must be entertained
app.use(
    cors({
        origin:"*",
        credentials:true,
    })
 )
 

//moute route

const userRoutes=require("./routes/User");



app.use("/api/v1/auth",userRoutes);


//default route
app.get("/",(req,res)=>{
    return res.json({
        success:true,
        message:'Your server is up and runnig',
    });
});

//active the server
app.listen(PORT,()=>{
    console.log(`App is running at PORT ${PORT}`);
});
