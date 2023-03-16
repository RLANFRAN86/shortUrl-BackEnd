const urlManager = require("../managers/urlManager");
const mongoose = require("mongoose");

async function deleteUrlHandler(req, res) {
  const url = await urlManager.deleteUrl(new mongoose.Types.ObjectId(req.body._id));
  console.log(req.body._id, "Url Eliminada =) ");

  res.status(200).json([]).end();
}

module.exports = deleteUrlHandler;
