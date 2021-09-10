const express = require('express')
const userController = require('../controllers/user.controller')

const router = express.Router()

router.post('/users', userController.store)
router.get('/users', userController.findAll)
router.get('/users/:id', userController.findById)

module.exports = router
