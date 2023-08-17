// const {MongoClient}=require("mongodb")
// const url="mongodb://0.0.0.0:27017/"
// // or
// // const url="mongodb+srv://shaikrahaman04:Shaik12345@mongosh.ljsenb1.mongodb.net/?retryWrites=true&w=majority"
// const mongoClient=new MongoClient(url)
// try{
//     mongoClient.connect()
//     console.log("Server connected with our database")
// }
// catch(err){
// console.log(err,"Error in making the connection with Database")
// }

// const database=mongoClient.db("Testing_database")
// module.exports={database}

// const mongoose=require("mongoose")
// mongoose.set("strictQuery",true)
// const url="mongodb://0.0.0.0:27017/Employee"

// const connection=async()=>{
//     try{
//        await mongoose.connect(url)
//         console.log("server connected with the database")
//         // return clientInformation;
       
//     }
//     catch(err){
//         console.log(err,"error connection")
//     }
// }
// module.exports=connection;

// const mongoose=require('mongoose');
// mongoose.connect("mongodb://0.0.0.0:27017/Employee")
// .then(()=>console.log("connection succesful...."))
// .catch((err)=>console.log(err));

// const employee_structure=new mongoose.Schema({
//     firstName:String,
//     lastName:String,
//     salary:Number,
//     department:String,
//     lastCompany:String,
//     lastSalary:Number,
//     overallExp:Number,
//     contactInfo:Number,
//     yearGrad:Number,
//     gradStream:String

// })

// const Employee= new mongoose.model("Emplpoyee",employee_structure)

// const insertdata =new Employee({
//     firstName:"Shaik",
//     lastName:"Nikki",
//     salary:1000000,
//     department:"Apple",
//     lastCompany:"Baby",
//     lastSalary:1000000,
//     overallExp:2,
//     contactInfo:"966666",
//     yearGrad:"2022",
//     gradStream:"CSE"    
    
// })

// insertdata.save();

const mongoose = require('mongoose');
const yourSchema = new mongoose.Schema({
    firstName: {
      type: String,
      required: true
    },
    lastName: {  
      type: String,
      required: true
    }
  });
  

const YourModel = mongoose.model('YourModel', yourSchema);

module.exports = YourModel;


// employee.insertMany(userdetails).then(savedDocs => {
//     res.status(201).json(savedDocs);
//   })
//   .catch(error => {
//     console.error('Error saving data:', error); // Log the specific error
//     res.status(500).json({ error: 'Error saving data' });
//   });