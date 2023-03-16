require("../connection");
const verifyToken = require('../middleware/tokenvalidator')

const router = require("express").Router();
router.post("/",verifyToken, require("../Controllers/postUrl"));
router.get("/:shortUrl", require("../Controllers/getDataUrl"));
router.get("/id/:userid",verifyToken, require("../Controllers/getIdUrl"));
router.delete("/delete", require("../Controllers/deleteUrl"));
//router.post('/:userId/shorturl', require("../Controllers/showShortUrl"));

module.exports = router;