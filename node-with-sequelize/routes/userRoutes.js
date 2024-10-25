const usersController = require('../controller/usersController.js')



const router = require('express').Router()


router.post('/addUser', usersController.addUsers)

router.get('/allUsers', usersController.getAllUsers)

router.get('/getSingleUser', usersController.getOneUser)

router.get('/addPublishedUsers', usersController.getPublishedUser)

router.delete('/:id', usersController.deleteUser)

module.exports = router