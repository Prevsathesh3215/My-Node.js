const borrowerController = require('../controllers/borrowerController.js')



const router = require('express').Router()


router.post('/addBorrower', borrowerController.addBorrower)

router.get('/allBorrowers', borrowerController.getAllBorrowers)

// router.get('/getSingleUser', borrowerController.getOneUnit)

//router.get('/addPublishedUsers', borrowerController.getPublishedUser)

router.get('/:PKborrowerID', borrowerController.getOneBorrower)

router.put('/:PKborrowerID', borrowerController.updateBorrower)

router.delete('/:PKborrowerID', borrowerController.deleteBorrower)

module.exports = router