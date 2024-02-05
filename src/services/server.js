const express = require("express")
const mongoose = require("mongoose")
const { Users, Messages } = require("./models/users")

const app = express()
const cors = require("cors")
const conString = "mongodb+srv://ezekielugweje3:QVDvIox2W5g4wlyD@cluster0.be8tvwi.mongodb.net/"
app.use(express.json())


var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions))
mongoose.connect(conString)
    .then(() =>{
        app.listen(8080, () => { console.log("DB connected and Server started at port 8080") })
    }).catch((err) => {
    console.log(err)
    })
// app.use((req, res) => {
//     console.log(req.path, req.method)
//     res.end()
// })

app.post("/new-message",  async (req, res) => {
    try {
    
    const { username, email, body } = req.body
    const msg = await  Messages.create({username, email, body})
    console.log("Message added")
        res.status(200).json({ msg })
         console.log(msg)
    await msg.save()
    } catch (err) {
        console.log(err)
        res.status(400).json(err)
    }
})
app.get("/all-messages", async (req, res) => {
    try {
        const allUsers = await Messages.find()
        res.json(allUsers)
    } catch (err) {
        console.log(err)
    }
})

app.get("/", (req, res) => {
    res.send("Hello this is backend")
})

app.use((req, res) => {
    console.log("Path not found")
    res.send("Path not found")
})
// app.listen(8080, () => { console.log("DB connected and Server started at port 8080") })