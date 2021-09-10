const crypto = require('bcrypt')

const saltRounds = 10

exports.hash = async (password) => {
  try {
    const encrypted = await crypto.hash(password, saltRounds)
    return encrypted
  } catch (error) {
    console.error(error)
  }
}

exports.compareHashes = async (password) => {

}
