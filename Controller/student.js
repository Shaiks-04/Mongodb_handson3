const employee=require("../projectmodel/projectstructure")

const insertDetails=async(req,res)=>{
const userdetails=req.body;
// const {firstName,lastName,salary,department,lastCompany,lastSalary,overallExp,contactInfo,yearGrad,gradStream}=req.body;
// const user=await student.findOne({Email:Email})
// if(user){
    // res.send({msg:"user already in use"})
// }
// const result=await student.create({
    // name,Email,Password,BtachID
// })
// else{
// const tempObj= new employee ({
//     firstName:firstName,
//     lastName:lastName,
//     salary:salary,
//     department:department,
//     lastCompany:lastCompany,
//     lastSalary:lastSalary,
//     overallExp:overallExp,
//     contactInfo:contactInfo,
//     yearGrad:yearGrad,
//     gradStream:gradStream
// });
const result=await employee.insertMany(userdetails);
return res.send({msg:"user data has been stored",result:result})
}
// }
const fetchdata=async(req,res)=>{
    const result=await employee.find()
    return res.send({result:result})
}
const deletedata=async(req,res)=>{
    const result=await employee.deleteMany({"lastCompany":{"$gt":'Y'}})
    return res.send({result:result})

}
const salary=async (req,res)=>{
    const result=await employee.find({"salary":{"$gt":"30000"}})
    res.send({result:result})
}

const overallExp=async (req,res)=>{
    const result=await employee.find({"overallExp":{"$gt":"2"}})
    res.send({result:result})
}

const graduate=async (req,res)=>{
    const result=await employee.find({ "yearGrad": { $gt: "2015" }, "overallExp": { $gt: "1" } })
    res.send({result:result})
}

const setsalary=async (req,res)=>{
    const result=await employee.updateMany({"salary":{"$lt":"70000"}},{"$set":{"salary":"65000"}})
    res.send({result:result})
}


module.exports={insertDetails,fetchdata,deletedata,salary,overallExp,graduate,setsalary}
