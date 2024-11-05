const db = require('../models/setup_db')

const Categories = db.categories

const addCateg = async(req, res) => {
  let info =  {
    FKCategID : req.body.FKCategID,
    name: req.body.name,
    description: req.body.description,
    genre: req.body.genre,
  }

  const categories = await Categories.create(info)
  res.status(200).send(categories)
}

const getAllCategs = async (req, res) => {
  // console.log(`this is ${Books}`)

  let categ = await Categories.findAll({})
  res.status(200).send(categ)

}

const getOneCateg= async (req, res) => {

  let FKCategID = req.params.FKCategID
  // console.log(id)
  let categs = await Categories.findOne({ where: {FKCategID : FKCategID }})
  res.status(200).send(categs)

}

const deleteCateg = async (req, res) => {

  let paramId = req.params.FKCategID
  console.log(paramId)
  await Books.destroy({
    where: {
      FKCategID: paramId,
    },
  },
  );

}


const updateCateg = async (req, res) => {

  let id = req.params.FKCategID

  const categ = await Categories.update(req.body, { where: { FKCategID: id }})

  res.status(200).send("record updated")
 

}


module.exports = {
  addCateg,
  getAllCategs,
  getOneCateg,
  deleteCateg,
  updateCateg,
}