const mongoose=require("mongoose")

const signschema=new mongoose.Schema({
    email:String,
    password:String
})

module.exports=mongoose.model("simpleusers",signschema);