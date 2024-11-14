const unitsDataController = require('../controller/unitsDataController.js')
const userLogin = require('../loginAuth/userRegister.js')



const router = require('express').Router()


router.post('/addUnitData', unitsDataController.addUnitData)

router.get('/allUnitsData', unitsDataController.getAllunitsData)

router.get('/getSingleUnitData', unitsDataController.getOneUnitData)

//router.get('/addPublishedUsers', unitsDataController.getPublishedUser)

router.get('/:unitid', unitsDataController.getOneUnitData)

router.put('/:unitid', unitsDataController.updateUnitData)

router.delete('/:unitid', unitsDataController.deleteUnitData)


// router.post('/addUnitData', [userLogin.userLogin, unitsDataController.addUnitData])

// router.get('/allUnitsData', [userLogin.userLogin, unitsDataController.getAllunitsData])

// router.get('/getSingleUnitData', [userLogin.userLogin, unitsDataController.getOneUnitData])

// //router.get('/addPublishedUsers', unitsDataController.getPublishedUser)

// router.get('/:unitid', [userLogin.userLogin, unitsDataController.getOneUnitData])

// router.put('/:unitid', [userLogin.userLogin, unitsDataController.updateUnitData])

// router.delete('/:unitid', [userLogin.userLogin, unitsDataController.deleteUnitData])


module.exports = router