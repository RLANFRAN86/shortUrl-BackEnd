const Url = require("../Model/urlModel");

class urlManager {
  static async createShortUrl(body) {
    const newUrl = new Url(body);
    // Guarda la nueva instancia de Url en la base de datos
    await newUrl.save();
    return newUrl;
  }

  // Busca la URL larga en la base de datos utilizando el objeto body como argumento
  static async getUrl(body) {
    const longUrl = await Url.find(body);
    return longUrl;
  }

  // Busca en la base de datos instancias de la clase Url que tengan una propiedad UserId igual a la cadena "id" proporcionada
  static async getIdUrl(id) {
    const data = await Url.findOne({ UserId: id });
    return data;
  }

  // Elimina de la base de datos la clase Url que tenga el ID proporcionado
  static async deleteUrl(id) {
    const data = await Url.deleteOne({ _id: id });
    console.log(id)
    return data;
  }

  //busca en BD url original para devolverla
  static async getDataUrl(shortUrl) {
    const returnUrl = await Url.findOne({ GeneratedUrl: shortUrl });
    return returnUrl
  }

  static async getUrlById(id) {
    const data = await Url.find({ UserId: id });
    return data;
  }

}


module.exports = urlManager;