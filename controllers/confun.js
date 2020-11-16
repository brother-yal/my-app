const controlador = {

};
const users = require("../models/users");

controlador.add = (req, res) => {
    res.render("add.html")
}

controlador.create =  async (req, res) => {
    try{
        const iuser = new users(req.body);
        await iuser.save();
        res.redirect("/")  
    } catch (err) {
        console.error(err);
        res.status(400).send("we sorry, sonthing wen wrong, please try again")
    }
}

controlador.index = async (req, res) => {
    try{
        const iuserfound = await users.find();
        res.render("index.html", {iuserfound});
    } catch(err){
        console.error(err)
    }
};


controlador.delete = async (req, res) => {
    const {id} = req.params;
    await users.deleteOne({_id: id});
    res.redirect("/");
}



controlador.update = async (req, res) => {
   try{
    const found = await users.findById(req.params.id);
    res.render("update.html", {found});
   } catch(err) {
       console.error(err);
   }
}


controlador.updates = async (req, res) => {
    try{
        const {nickname, description} = req.body;
       await users.findByIdAndUpdate(req.params.id, {nickname, description})
        res.redirect("/")
    } catch(err){
        console.error(err)
    }
    
}
   
module.exports = controlador;