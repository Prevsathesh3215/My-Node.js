const db = require('../models/setupdb.js')

const Units = db.units


const addUnit = async (req, res) => {

  console.log(`body is ${req.body}`)
  let info =  {
    id : req.body.id,
    unitid: req.body.unitid,
    meta: req.body.meta,
    assetname: req.body.assetname
  }

  const units = await Units.create(info)
  res.status(200).send(units)

}

const getAllUnits = async (req, res) => {
  console.log(`this is ${Units}`)

  let units = await Units.findAll({})
  res.status(200).send(units)

}

const getOneUnit = async (req, res) => {

  let id = req.params.id
  console.log(id)
  let units = await Units.findOne({ where: {id : id }})
  res.status(200).send(units)

}

const deleteUnit = async (req, res) => {

  let paramId = req.params.id
  console.log(paramId)
  await Units.destroy({
    where: {
      id: paramId,
    },
  },
  );
  res.status(200).send('record deleted')

}


const updateUnit = async (req, res) => {

  let id = req.params.id

  const unit = await Units.update(req.body, { where: { id: id }})

  res.status(200).send("record updated")
 

}


module.exports = {
  addUnit,
  getAllUnits,
  getOneUnit,
  deleteUnit,
  updateUnit,
}
