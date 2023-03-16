// const ShortUrl = require('../Model/urlModel');

// async function showShortUrl(req, res, next) {
//   try {
//     const shortUrl = new ShortUrl({
//       url: req.body.url,
//       userId: req.params.userId
//     });

//     const savedShortUrl = await shortUrl.save();

//     res.status(201).json(savedShortUrl);
//   } catch (error) {
//     next(error);
//   }
// }

// module.exports = {
//     showShortUrl,
// };
