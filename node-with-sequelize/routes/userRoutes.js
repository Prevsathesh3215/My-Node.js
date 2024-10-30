const usersController = require('../controller/usersController.js')
const userLogin = require('../loginAuth/userRegister.js')



const router = require('express').Router()


router.post('/addUser', [userLogin.userLogin, usersController.addUsers])

router.get('/allUsers', usersController.getAllUsers)

router.get('/getSingleUser', usersController.getOneUser)

//router.get('/addPublishedUsers', usersController.getPublishedUser)

router.get('/:id', [userLogin.userLogin, usersController.getOneUser])

router.put('/:id', usersController.updateUser)

router.delete('/:id', [userLogin.userLogin, usersController.deleteUser])

module.exports = router