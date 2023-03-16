const urlManager = require("../managers/urlManager");

async function getDataUrl(req, res) {
  const url = await urlManager.getUrl(req.params)
  console.log(url)
  res.status(200).json(url);
}

module.exports = getDataUrl;