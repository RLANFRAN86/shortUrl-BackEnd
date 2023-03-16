const urlManager = require("../managers/urlManager");
const ShortUniqueId = require("short-unique-id");
const uid = new ShortUniqueId({ length: 7 });


const postUrl = async (req, res) => {
  const { originalUrl, UserId } = req.body;
  const url = await urlManager.createShortUrl({
    originalUrl,
    GeneratedUrl: `${uid()}`,
    UserId,
  });
  res.status(201).json({ url: url });
  console.log(url)
  console.log(UserId)
};

module.exports = postUrl;