const urlManager = require("../managers/urlManager");
const mongoose = require("mongoose");

//llamo a funcion "deletURL" de urlManager para eliminar url con el id del body
async function deleteUrlHandler(req, res) {
    //captura de errores
  try {
    const deletedUrl = await urlManager.deleteUrl(mongoose.Types.ObjectId(req.body._id));
    console.log(req.body._id, "respuesta en body ");
    console.log(deletedUrl, "delete url");

    res.status(200).json([]).end();
  } catch (error) {
    console.error(error);
    res.status(500).end();
  }
}

module.exports = deleteUrlHandler;