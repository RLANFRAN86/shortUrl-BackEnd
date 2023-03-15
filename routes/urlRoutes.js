require("../connection");

const router = require("express").Router();
router.post("/", require("../Controllers/postUrl"));
router.get("/:geturl", require("../Controllers/getUrldata"));
router.get("/id/:userid", require("../Controllers/getIdUrl"));
router.delete("/delete/", require("../Controllers/deleteUrl"));

module.exports = router;