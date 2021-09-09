const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
  res.status(200).json({
    message: 'The best unicorns API!',
    uptime: process.uptime()
  })
})

module.exports = router
