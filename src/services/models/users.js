const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    username: String,
    email: String
})

const MessageSchema = new mongoose.Schema({
    username: String,
    email: String,
    body: String,
})
const Users = mongoose.model("User", UserSchema)
const Messages = mongoose.model("Message", MessageSchema)

module.exports = { Users, Messages }