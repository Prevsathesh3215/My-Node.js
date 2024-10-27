const unitsDataController = require('../controller/unitsDataController.js')



const router = require('express').Router()


router.post('/addUnitData', unitsDataController.addUnitData)

router.get('/allUnitsData', unitsDataController.getAllunitsData)

router.get('/getSingleUnitData', unitsDataController.getOneUnitData)

//router.get('/addPublishedUsers', unitsDataController.getPublishedUser)

router.get('/:unitid', unitsDataController.getOneUnitData)

router.put('/:unitid', unitsDataController.updateUnitData)

router.delete('/:unitid', unitsDataController.deleteUnitData)

module.exports = router