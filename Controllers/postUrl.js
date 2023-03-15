const { Router } = require("express");
const User = require("../Model/userModel");
const urlManager = require("../managers/urlManager");
const ShortUniqueId = require("short-unique-id");
const uid = new ShortUniqueId({ length: 7 });
var validator = require("validator");

//const uuid = require("uuid");

const loginRouter = Router();

loginRouter.post("/", async (req, res) => {
    const { originalUrl, UserId } = req.body;
    console.log(req.body)
    //aqui creo una ruta acortada
    const url = validator.isURL(originalUrl)
    ? await urlManager.createShortUrl({
      originalUrl,
      GeneratedUrl: `${uid()}`,
      UserId,
        })
        :' Url indefinida '; //valido existencia de url
   res.status(201).json({ url: url }).end();
  }
)



// loginRouter.post("/", async (req, res, next) => {
//   try {
//     const { originalUrl, UserId } = req.body;
//     console.log(req.body)
//     //aqui creo una ruta acortada
//     const url = await urlManager.createShortUrl({
//       originalUrl,
//       //GeneratedUrl: `${uuid()}`,
//       UserId,
    
//     });
// console.log(url)
//     return res.status(201).json({ url: url }).end();
//   } catch (err) {
//     next(err);
//   }
// });

module.exports = loginRouter;