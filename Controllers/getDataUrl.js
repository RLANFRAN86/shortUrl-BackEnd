const urlManager = require("../managers/urlManager");

async function getDataUrl(req, res) {
  const { shortUrl } = req.params;
  try {
    const url = await urlManager.getDataUrl(shortUrl);
    res.redirect(url.originalUrl);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
}

module.exports = getDataUrl;

