const mongoose=require("mongoose");

const notesScheme=new mongoose.Schema({
    title:String,
    description:String
})
module.exports=mongoose.model("mainschema",notesScheme);