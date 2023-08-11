const {database} =require("../config/db")
const student_collection=database.collection("student_record");
//const array=[] we are assuming 
// const array=[]
const addData=async(req,res)=>{
    const data=req.body;//{}
    const result=await student_collection.insertOne(data)
    // array.push(data)
    res.send({msg:"succesfully added",data:result})
}
const addMultipleData=async(req,res)=>{
    const data=req.body;//{}
    const result=await student_collection.insertMany(data)
    // array.push(data)
    res.send({msg:"succesfully added",data:result})
}
const fetchData= async(req,res)=>{
    const result=await student_collection.find().toArray();
    res.send(result)
}

module.exports={addData,addMultipleData,fetchData}