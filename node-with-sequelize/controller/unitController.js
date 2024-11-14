const db = require('../models/setupdb.js')

const Units = db.units


const addUnit = async (req, res) => {

  console.log(`body is ${req.body}`)
  let info =  {
    unitid: req.body.unitid,
    meta: req.body.meta,
    assetName: req.body.assetName
  }

  try{

    const units = await Units.create(info)
    res.status(200).send(units)
    
  }
  catch(err){
    res.status(500).json({
      success: false,
      error: err.message
    })
  }

}

const getAllUnits = async (req, res) => {
  // console.log(`this is ${Units}`)

  try{
    let units = await Units.findAll({
      include: db.unitsData
    })
    res.status(200).send(units)
  }
  catch(err){
    res.status(500).json({
      success: false,
      error: err.message
    })
  }


}

const getOneUnit = async (req, res) => {

  try{
    let id = req.params.unitid
    // console.log(id)
    let units = await Units.findOne({ where: {unitid : id }})
    res.status(200).send(units)
  }
  catch(err){
    res.status(500).json({
      success: false,
      error: err.message
    })
  }

}

const deleteUnit = async (req, res) => {

  try{
    let paramId = req.params.unitid
    // console.log(paramId)
    await Units.destroy({
      where: {
        unitid: paramId,
      },
    },
    );
    res.status(200).send('record deleted')
  }
  catch(err){
    res.status(500).json({
      success: false,
      error: err.message
    })
  }

}


const updateUnit = async (req, res) => {

  try{
    let id = req.params.id

    const unit = await Units.update(req.body, { where: { id: id }})
  
    res.status(200).send("record updated")
  }
  catch(err){
    res.status(500).json({
      success: false,
      error: err.message
    })
  }
 

}


module.exports = {
  addUnit,
  getAllUnits,
  getOneUnit,
  deleteUnit,
  updateUnit,
}
