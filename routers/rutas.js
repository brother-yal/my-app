const express = require("express");
const router = express.Router();
const confun = require("../controllers/confun");

router.get("/", confun.index);

router.get("/add", confun.add);
router.post("/create", confun.create);

router.get("/delete/:id", confun.delete)

router.get("/update/:id", confun.update)
router.put("/update/:id", confun.updates)



module.exports = router;