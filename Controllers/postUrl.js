const urlManager = require("../managers/urlManager");
const ShortUniqueId = require("short-unique-id");
const uid = new ShortUniqueId({ length: 7 });


const postUrl = async (req, res) => {
  const { originalUrl } = await req.body;
  const url = await urlManager.createShortUrl({
    originalUrl,
    GeneratedUrl: `${uid()}`,
  });
  res.status(201).json({ url: url });
};

module.exports = postUrl;