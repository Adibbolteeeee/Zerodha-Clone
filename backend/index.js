require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();

const PORT = process.env.PORT || 8080;
app.listen(PORT,()=>{
    console.log("App Started");
})

//MongoDB setup 
const URL = process.env.MONGO_URL

main()
.then(() => {
    console.log("Database connection successful...");
})
.catch((err) => {
    console.log(err);
});
async function main() {
    await mongoose.connect(URL);
}



app.get("/",(req,res) => {
    res.hello("Hello");
})