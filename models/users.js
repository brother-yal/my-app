const mongoose = require("mongoose");



var userschema = new mongoose.Schema({
    nickname: String,
    description: String
});

module.exports = mongoose.model("user", userschema);