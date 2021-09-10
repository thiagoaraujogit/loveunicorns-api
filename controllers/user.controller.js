const User = require('../models/user.model')
const crypto = require('../utils/crypto')

exports.store = async (req, res) => {
  const { name, email, password } = req.body

  try {
    const encryptedPassoword = await crypto.hash(password)
    await User.create({ name: name, email: email, password: encryptedPassoword })
    return res.json({ message: 'User successfully created!'})
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
