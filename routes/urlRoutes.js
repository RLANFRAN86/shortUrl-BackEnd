require("../connection");

const router = require("express").Router();
router.post("/", require("../Controllers/postUrl"));
router.get("/:geturl", require("../Controllers/getDataUrl"));
router.get("/id/:userid", require("../Controllers/getIdUrl"));
router.delete("/delete", require("../Controllers/deleteUrl"));
//router.post('/:userId/shorturl', require("../Controllers/showShortUrl"));

module.exports = router;