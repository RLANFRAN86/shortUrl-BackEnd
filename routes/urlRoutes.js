require("../connection");
const router = require("express").Router();
const verifyToken = require('../middleware/tokenvalidator');
const postUrl = require('../Controllers/postUrl')
const getDataUrl = require('../Controllers/getDataUrl')
const getIdUrl = require('../Controllers/getIdUrl')
const deleteUrl =  require('../Controllers/deleteUrl')
const getAllurl =  require('../Controllers/getAllUrl')


router.post("/",verifyToken, postUrl);
router.get("/:shortUrl", getDataUrl);
//router.get("/getallurl", getAllurl);
router.get("/id/:userid", getIdUrl); //get all
router.delete("/delete",verifyToken, deleteUrl);

module.exports = router;