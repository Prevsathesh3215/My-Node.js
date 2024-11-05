const booksController = require('../controllers/bookController.js')



const router = require('express').Router()


router.post('/addBook', booksController.addBook)

router.get('/allBooks', booksController.getAllBooks)

// router.get('/getSingleUser', booksController.getOneUnit)

//router.get('/addPublishedUsers', booksController.getPublishedUser)

router.get('/:bookid', booksController.getOneBook)

router.put('/:bookid', booksController.updateBook)

router.delete('/:bookid', booksController.deleteBook)

module.exports = router