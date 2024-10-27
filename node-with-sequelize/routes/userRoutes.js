const usersController = require('../controller/usersController.js')



const router = require('express').Router()


router.post('/addUser', usersController.addUsers)

router.get('/allUsers', usersController.getAllUsers)

router.get('/getSingleUser', usersController.getOneUser)

//router.get('/addPublishedUsers', usersController.getPublishedUser)

router.get('/:id', usersController.getOneUser)

router.put('/:id', usersController.updateUser)

router.delete('/:id', usersController.deleteUser)

module.exports = router