const db = require('../models/setupdb.js')

const UnitsData = db.unitsData


const addUnitData = async (req, res) => {

  // console.log(`body is ${req.body}`)
  let info =  {
    time : req.body.time,
    mileage: req.body.mileage,
    speed: req.body.speed,
    longitude: req.body.longitude,
    ignition: req.body.ignition,
    meta: req.body.meta,
    unitid: req.body.unitid,
  }

  try{

    const unitsData = await UnitsData.create(info)
    res.status(200).send(unitsData)
    
  }
  catch(err){
    res.status(500).json({
      success: false,
      error: err.message
    })
  }

}

const getAllunitsData = async (req, res) => {
  // console.log(`this is ${unitsData}`)

  try{

    let unitsData = await UnitsData.findAll({})
    res.status(200).send(unitsData)
  }
  catch(err){
    res.status(500).json({
      success: false,
      error: err.message
    })
  }


}

const getOneUnitData = async (req, res) => {

  try{

    let unitid = req.params.unitid
    // console.log(time)
    let unitsData = await UnitsData.findOne({ where: {unitid: unitid }})
    res.status(200).send(unitsData)
  }
  catch(err){
    res.status(500).json({
      success: false,
      error: err.message
    })
  }

}

const deleteUnitData = async (req, res) => {

  try{
    let unitid = req.params.unitid
    console.log(unitid)
    await UnitsData.destroy({
      where: {
        unitid : unitid,
      }
    });
    res.status(200).json({
      success: true,
      message: 'Record succesfully deleted!'
    })
  }
  catch(err){
    res.status(500).json ({
      success: false,
      error: err.message
    })
  }

}


const updateUnitData = async (req, res) => {


  try{
    let unitid = req.params.unitid

    const unit = await UnitsData.update(req.body, { where: { unitid: unitid }})
  
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
  addUnitData,
  getAllunitsData,
  getOneUnitData,
  deleteUnitData,
  updateUnitData,
}
