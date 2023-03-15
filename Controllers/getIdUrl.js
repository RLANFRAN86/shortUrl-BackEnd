const urlManager = require("../managers/urlManager");
const mongoose = require("mongoose");


async function getIdUrl(req, res) {
  const url = await urlManager.getUrlById(
    mongoose.Types.ObjectId(req.params.Userid)
  );

  res.status(200).json(url).end();
}

module.exports = getIdUrl;