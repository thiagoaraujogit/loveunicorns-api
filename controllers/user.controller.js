const User = require('../models/user.model')

exports.store = async (req, res) => {
  const { name, email, password } = req.body

  try {
    const user = await User.create({ name, email, password })
    return res.json(user)
  } catch (error) {
    console.error(error)
  }
}

exports.findAll = async (req, res) => {
  const users = await User.findAll()

  return res.json(users)
}

exports.findById = async (req, res) => {
  const { id } = req.params

  try {
    const user = await User.findByPk(id)
    return res.json(user)
  } catch (error) {
    console.log(error)
  }
}
