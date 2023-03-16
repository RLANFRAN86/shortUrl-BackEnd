const urlManager = require("../managers/urlManager");

async function getDataUrl(req, res) {
  try {
    const url = await urlManager.getUrl(req.params);
    console.log(url);
    res.status(200).json(url);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
}

module.exports = getDataUrl;


// async function getDataUrl(req, res) {
//   const url = await urlManager.getUrl(req.params)
//   console.log(url)
//   res.status(200).json(url);
// }

// module.exports = getDataUrl;