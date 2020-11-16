//require
const express = require("express");
const app = express();
const path = require("path")
const port = process.env.PORT || 3000;
const methodOverride = require('method-override')

//middleware
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true}));
app.use(express.json())
app.use(methodOverride ("_method"));

//settings
app.engine("html", require("ejs").renderFile);
app.set("view engine", "ejs");
app.set("views", "views");

//routes
app.use(require("./routers/rutas"));

//dbconection and config
app.set(require("./db"));

//listening on port
app.listen(port, ()=>{
    console.log("watting for connections on port", port)
});