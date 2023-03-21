const urlManager = require("../managers/urlManager");
const mongoose = require("mongoose");

async function getIdUrl(req, res) {
  const url = await urlManager.getUrlById(
    new mongoose.Types.ObjectId(req.params.Userid)
  );

  res.status(200).json(url);
}

module.exports = getIdUrl;

