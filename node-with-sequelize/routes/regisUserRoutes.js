const regisUserController = require('../controller/regisUserController')
const userLogin = require('../loginAuth/userRegister.js')



const router = require('express').Router()


router.post('/register', userLogin.registerUser)

// router.post('/login', userLogin.userLogin)

router.get('/allRegisUsers', [userLogin.userLogin, regisUserController.getAllRegisUser])

// router.get('/getSingleUser', regisUserController.getOneRegisUser)

//router.get('/addPublishedUsers', regisUserController.getPublishedUser)

router.get('/:id', [userLogin.userLogin, regisUserController.getOneRegisUser])

router.put('/:id', [userLogin.userLogin, regisUserController.updateRegisUser])

router.delete('/:id', [userLogin.userLogin, regisUserController.deleteRegisUser])

module.exports = router