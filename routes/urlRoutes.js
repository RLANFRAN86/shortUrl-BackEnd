require("../connection");
const router = require("express").Router();
//const verifyToken = require('../middleware/tokenvalidator');
const postUrl = require('../Controllers/postUrl')
const getDataUrl = require('../Controllers/getDataUrl')
const getIdUrl = require('../Controllers/getIdUrl')
const deleteUrl =  require('../Controllers/deleteUrl')


router.post("/", postUrl);
router.get("/:shortUrl", getDataUrl);
router.get("/id/:userid", getIdUrl);
router.delete("/delete", deleteUrl);
//router.post('/:userId/shorturl', require("../Controllers/showShortUrl"));

module.exports = router;