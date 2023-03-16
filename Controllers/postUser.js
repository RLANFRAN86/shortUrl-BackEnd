const userManager = require("../managers/userManager");

async function postUser(req, res) {  
  const user = await userManager.createUser({...req.body})
  console.log(user)
  res.status(201).json({ user: user });
  console.log(user)
}

module.exports = postUser;