const bcrypt = require("bcrypt");
const User = require("../Model/userModel");

class UserManager {
  static async createUser(body) {
    const user = new User(body); // crear un nuevo objeto User con el body
    const salt = await bcrypt.genSalt(10); // generar una sal aleatoria para la pass
    const hashedPassword = await bcrypt.hash(user.password, salt); // generar una hash con la sal aleatoria
    user.password = hashedPassword; // actualizar la pass del usuario con la  hash 
    await user.save(); // guardar el usuario en la bbdd
    return user; // usuario creado
  }
}


module.exports = UserManager;