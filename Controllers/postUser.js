const userManager = require("../managers/userManager");

async function postUser(req, res) {
  const user = await userManager.createUser({ ...req.body })
  res.status(201).json({ user: user });
}

module.exports = postUser;