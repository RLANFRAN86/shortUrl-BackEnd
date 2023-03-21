const loginRouter = require("express").Router();
const User = require("../Model/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const login = async (request, response) => {
  const { body } = request;
  const { email, password } = body;
  const user = await User.findOne({ email });

  if (!user) {
    return response.status(401).json({
      error: "Ingrese usuario",
    });
  }
  
  const validPassword = await bcrypt.compare(password, user.password);

  if (!user || !validPassword) {
    return response.status(401).json({
      error: "Email o password invalido",
    });
  }

  //luego de verificar que la autenticacion es exitosa -> crea objeto con mail y id usuario (sign jsonwebtoken)
  const userToken = {
    email: user.email,
    id: user._id,
  };

  const token = jwt.sign(userToken, process.env.SECRET_TOKEN);

  return response.send({
    email: user.email,
    id: user._id,
    token,
  });
}

module.exports = login;