const unitsController = require('../controller/unitController.js')



const router = require('express').Router()


router.post('/addUnit', unitsController.addUnit)

router.get('/allUnits', unitsController.getAllUnits)

// router.get('/getSingleUser', unitsController.getOneUnit)

//router.get('/addPublishedUsers', unitsController.getPublishedUser)

router.get('/:id', unitsController.getOneUnit)

router.put('/:id', unitsController.updateUnit)

router.delete('/:id', unitsController.deleteUnit)

module.exports = router