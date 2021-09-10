const User = require('../models/user.model')

exports.store = async (req, res) => {
  const { name, email, password } = req.body

  const user = await User.create({ name, email, password })

  return res.json(user)
}
