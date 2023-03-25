const express = require("express");
const port = 8000
const mongoose = require("mongoose");
const cors = require("cors")
const upload = require("express-fileupload")
const simpleusers = require("./schemas/user");
const mainschema = require("./schemas/notes")
const uri = `mongodb+srv://bharathravi01121999:bharath2410@cluster0.rp1ynna.mongodb.net/?retryWrites=true&w=majority`
mongoose.set('strictQuery', true);
const mongoosestart = async () => {
    await mongoose.connect(uri)
    console.log("Your Database connected Successfully");
}
mongoosestart();
const app = express();
app.use(express.json());
app.use(cors())
app.use(upload())
app.post("/signup", async (req, res) => {
    console.log(req.body);
    try {
        let data = new simpleusers(req.body);
        const result = await data.save();
        res.status(200).json({
            status: "success",
            message: "user detail stored in database successfully"
        })
    } catch (err) {
        res.status(400).json({
            status: "failed",
            message: err.message
        })
    }
})

app.post("/notes", async (req, res) => {
    console.log(req.body);
    try {
        let data = new mainschema(req.body);
        const result = await data.save();
        res.status(200).json({
            status: "success",
            message: "uploaded successfully"
        })
    } catch (err) {
        res.status.json({
            status: "failed",
            message: err.message
        })
    }
})

app.get("/alldata", async (req, res) => {
    try {
        const alldata = await mainschema.find()
        res.status(200).json({
            status: "success",
            result: alldata
        })
    } catch (err) {
        res.status(400).json({
            status: "failure",
            message: err.message
        })
    }
})

app.get("/alluser", async (req, res) => {
    try {
        let alldata = await simpleusers.find();
        res.status(200).json({
            status: "success",
            result: alldata
        })
    } catch (err) {
        res.status(400).json({
            status: "failure",
            message: err.message
        })
    }
})
app.delete("/delall", async (req, res) => {
    try {
        let data = await mainschema.delete({});
        res.status(200).json({
            status: "success",
            message: "deleted all"
        })
    } catch (err) {
        res.status(400).json({
            status: "failure",
            message: err.message
        })
    }
})

app.listen(port, () => {
    console.log(`server is ready in ${port}`);
})