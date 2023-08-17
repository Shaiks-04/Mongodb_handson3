const userdata=database.collection("userDeatils")

const collection=require("../projectmodel/projectstructure")

const userdetails=async(req,res)=>{
    const data=req.body;
    const result=await collection.insertOne(data)
    res.send({msg:"successfully added",data:result})

}
const addmultipledata=async(req,res)=>{
    const multipledata=req.body;
    const empdata=multiple.map((items)=>{
        return({
            firstname:items.firstname,
            lastname:items.lastname,
            salary:items.salary,
            password:items.password
        })

    })
   const data= await collection.insertMany(empdata)
    res.send({msg:"data saved",result:data})
}
module.exports={userdetails,addmultipledata}