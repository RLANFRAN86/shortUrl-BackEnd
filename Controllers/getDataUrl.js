const urlManager = require("../managers/urlManager");

async function getDataUrl(req, res) {
  const { shortUrl } = req.params;
  try {
    const url = await urlManager.getDataUrl(shortUrl);
    if(!url){
      return res.status(404).json({error: "url no existe"});
    }
    res.status(200).json(url.originalUrl)
  } catch (error) {
    res.status(500).json({ error: {error: 'Fallo Base de datos'} });
  }
}

module.exports = getDataUrl;

