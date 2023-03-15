require("../connection");

const router = require("express").Router();
router.post("/", require("../Controllers/postUser"));
router.post("/login", require("../Controllers/login"));


module.exports = router;