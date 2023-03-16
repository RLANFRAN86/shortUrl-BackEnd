const urlManager = require("../managers/urlManager");
const mongoose = require("mongoose");


async function getIdUrl(req, res) {
  const url = await urlManager.getIdByUrl(
    mongoose.Types.ObjectId(req.params.UserId),
    //console.log(getIdUrl)
  );
  res.status(200).json(url);
}

module.exports = getIdUrl;