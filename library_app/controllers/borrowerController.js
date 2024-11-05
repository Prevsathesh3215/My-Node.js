const db = require('../models/setup_db')

const Borrower = db.borrower

const addBorrower = async(req, res) => {
  let info =  {
    bookId : req.body.bookId,
    name: req.body.name,
    contactInfo: req.body.contactInfo,
    PKborrowerID: req.body.PKborrowerID,
    checkoutDate: req.body.checkoutDate,
    dueDate: req.body.dueDate,
    returnDate: req.body.returnDate,
  }

  const borrower = await Borrower.create(info)
  res.status(200).send(borrower)
}

const getAllBorrowers = async (req, res) => {
  // console.log(`this is ${Books}`)

  let borrow = await Borrower.findAll({})
  res.status(200).send(borrow)

}

const getOneBorrower = async (req, res) => {

  let bookId = req.params.bookId
  // console.log(id)
  let borrower = await Borrower.findOne({ where: {bookId : bookId }})
  res.status(200).send(borrower)

}

const deleteBorrower = async (req, res) => {

  let paramId = req.params.bookId
  console.log(paramId)
  await Borrower.destroy({
    where: {
      bookId: paramId,
    },
  },
  );

}


const updateBorrower = async (req, res) => {

  let PKborrowerID = req.params.PKborrowerID
  console.log(PKborrowerID)

  const borrower = await Borrower.update(req.body, { where: { PKborrowerID: PKborrowerID }})

  res.status(200).send("record updated")
 

}


module.exports = {
  addBorrower,
  getAllBorrowers,
  getOneBorrower,
  deleteBorrower,
  updateBorrower,
}