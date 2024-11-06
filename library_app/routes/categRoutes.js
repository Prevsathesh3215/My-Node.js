const categController = require('../controllers/categController')



const router = require('express').Router()


router.post('/addCateg', categController.addCateg)

router.get('/allCategs', categController.getAllCategs)

// router.get('/getSingleUser', categController.getOneUnit)

//router.get('/addPublishedUsers', categController.getPublishedUser)

router.get('/:name', categController.getOneCateg)

router.put('/:FKCategID', categController.updateCateg)

router.delete('/:FKCategID', categController.deleteCateg)

module.exports = router