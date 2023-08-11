const {MongoClient}=require("mongodb")
const url="mongodb://0.0.0.0:27017/"
// or
// const url="mongodb+srv://shaikrahaman04:Shaik12345@mongosh.ljsenb1.mongodb.net/?retryWrites=true&w=majority"
const mongoClient=new MongoClient(url)
try{
    mongoClient.connect()
    console.log("Server connected with our database")
}
catch(err){
console.log(err,"Error in making the connection with Database")
}

const database=mongoClient.db("Testing_database")
module.exports={database}