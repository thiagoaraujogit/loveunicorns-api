const router = require('express').Router();
const prisma = require('../configs/database')

const UserController = require('../controllers/user.controller');

router.get('/users', UserController.getAll)

router.get('/users/:id', UserController.getOne)

module.exports = router;