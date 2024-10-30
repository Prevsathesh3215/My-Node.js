const unitsController = require('../controller/unitController.js')
const userLogin = require('../loginAuth/userRegister.js')



const router = require('express').Router()


router.post('/addUnit', [userLogin.userLogin, unitsController.addUnit])

router.get('/allUnits', [userLogin.userLogin, unitsController.getAllUnits])

// router.get('/getSingleUser', unitsController.getOneUnit)

//router.get('/addPublishedUsers', unitsController.getPublishedUser)

router.get('/:id', [userLogin.userLogin, unitsController.getOneUnit])

router.put('/:id', [userLogin.userLogin, unitsController.updateUnit])

router.delete('/:id', [userLogin.userLogin, unitsController.deleteUnit])

module.exports = router