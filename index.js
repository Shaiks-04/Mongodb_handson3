const express = require("express");
const route=require("./Routes/route")
const app = express();
app.use(express.json())
app.use("/api",route)
app.get("/",(req,res)=>{
    res.send({msg:"this is a testing phase"})
})
app.listen(3001,()=>{
        console.log("server running on port 3001");
    })
