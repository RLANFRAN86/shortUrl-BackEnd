const urlManager = require("../managers/urlManager");
const mongoose = require("mongoose");

async function deleteUrlHandler(req, res) {
  const url = await urlManager.deleteUrl(new mongoose.Types.ObjectId(req.body._id));
  res.status(200).json({ id: req.body._id, message: "Url Eliminada =) " }).end();
}

module.exports = deleteUrlHandler;
