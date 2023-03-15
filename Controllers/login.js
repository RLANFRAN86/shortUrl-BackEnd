const loginRouter = require("express").Router();
const User = require("../Model/userModel");
const bcrypt = require("bcrypt");


const login = async (request, response) => {
  const { body } = request;
  const { email, password } = body;
  console.log(body)
  const user = await User.findOne({ email });
  console.log(user)

  if (!user) {
    return response.status(401).json({
      error: "Email or password invalid",
    });
  }

  const validPassword = await bcrypt.compare(password, user.password);

  if (!validPassword) {
    return response.status(401).json({
      error: "Email or password invalid",
    });
  }

  return response.send({
    email: user.email,
    id: user._id,
  });
}






//   if (!validPassword || !user) {
//     return response.status(401).json({
//       error: "Email or password invalid",
//     });
//   }
//   console.log(response)
//   return response.send({
//     email: user.email,
//     id: user._id,
//   });
// });

module.exports = login;