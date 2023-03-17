const Url = require("../Model/urlModel");

class urlManager {
  // Crea una nueva instancia de la clase Url (objeto) utilizando el objeto body como argumento
  static async createShortUrl(body) {
    console.log(body);
    const newUrl = new Url(body);
    // Guarda la nueva instancia de Url en la base de datos
    await newUrl.save();
    // Devuelve la nueva instancia de Url creada
    return newUrl;
  }

  // Busca la URL larga en la base de datos utilizando el objeto body como argumento
  static async getUrl(body) {
    const longUrl = await Url.find(body);
    // Devuelve la URL larga encontrada en la base de datos
    return longUrl;
  }

  // Busca en la base de datos instancias de la clase Url que tengan una propiedad UserId igual a la cadena "id" proporcionada
  static async getIdUrl(id) {
    // Devuelve un array con todas las instancias de la clase Url que cumplen con el criterio de búsqueda
    const data = await Url.findOne({ UserId: id });
    return data;
  }

  // Elimina de la base de datos la clase Url que tenga el ID proporcionado
  static async deleteUrl(id) {
    // Devuelve un objeto con información sobre la eliminación de la Url
    const data = await Url.deleteOne({ _id: id });
    console.log(id)
    return data;
    
  }

//busca en BD url original para devolverla
  static async getDataUrl(shortUrl) {
     console.log("hola",shortUrl)
     const returnUrl = await Url.findOne({ GeneratedUrl: shortUrl });
      return returnUrl
//       console.log(url);
//       console.log(shortUrl)
//       if (!shortUrl) {
//         throw new Error(`Url doesn't exist`);
//       }
// //si encuentra url que coincida, redirige a usuario a la url original (shortUrl)
//       res.redirect(shortUrl.originalUrl);
//       console.log(shortUrl.originalUrl)
//     } catch (error) {
//       res.status(404).json({ error: error.message });
//     }
  }


}

module.exports = urlManager;