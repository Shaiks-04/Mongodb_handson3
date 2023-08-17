const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const url = "mongodb://0.0.0.0:27017/";
const connection=require("./config/dbMongoose")
const express = require("express");
const router = require("./Routes/route");
const app = express();

const employee = require("./projectmodel/projectstructure");

app.use(express.json());

app.use("/api", router);

app.get("/", (req, res) => {
    res.send({ msg: "this is a testing phase" });
});

app.listen(3001, async () => {
    try {
        await connection(url);
        console.log("server running on port 3001");
    } catch (err) {
        console.log(err, "error occurred in running");
    }
});
