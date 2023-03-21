const urlManager = require("../managers/urlManager");
const mongoose = require("mongoose");
const Url = require('../Model/urlModel')

async function getAllUrls(req, res) {
      const url = await urlManager.getAllUrl();
      res.status(200).json({ originaUrl: req.originalUrl, shortUrl: req.shortUrl })
}


module.exports = getAllUrls;

