const db = require('../models/setup_db')

const Books = db.books

const addBook = async(req, res) => {
  let info =  {
    bookId : req.body.bookId,
    title: req.body.title,
    author: req.body.author,
    genre: req.body.genre,
    pubDate: req.body.pubDate,
    condition: req.body.condition,
    FKCategID: req.body.FKCategID
  }

  const books = await Books.create(info)
  res.status(200).send(books)
}

const getAllBooks = async (req, res) => {
  // console.log(`this is ${Books}`)

  let books = await Books.findAll({})
  res.status(200).send(books)

}

const getOneBook = async (req, res) => {

  let id = req.params.bookid
  console.log(id)
  let books = await Books.findOne({ where: {bookid : id }})
  res.status(200).send(books)

}

const deleteBook = async (req, res) => {

  let paramId = req.params.bookid
  console.log(paramId)
  await Books.destroy({
    where: {
      bookid: paramId,
    },
  },
  );

}


const updateBook = async (req, res) => {

  let id = req.params.bookid

  const book = await Books.update(req.body, { where: { bookid: id }})

  res.status(200).send("record updated")
 

}


module.exports = {
  addBook,
  getAllBooks,
  getOneBook,
  deleteBook,
  updateBook,
}