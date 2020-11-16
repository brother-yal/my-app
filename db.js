const mongoose = require("mongoose");


const config = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
mongoose.connect("mongodb://localhost/myapp", config)


const db = mongoose.connection;
db.on("error", console.error.bind(console, "conection error: "));
db.on("open", () => {console.log("everithing on db is going good")});

module.exports = db;