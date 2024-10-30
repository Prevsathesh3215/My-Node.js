const db = require('../models/setupdb.js')

const RegisUser = db.regisUser


const addRegisUser = async (payload, req, res) => {

  console.log(`body is ${payload}`)
  let info =  {
    id : payload.id,
    username: payload.username,
    email: payload.email,
    password: payload.password,
    age: payload.age,
    role: payload.role,
    firstname: payload.firstname, 
    lastname: payload.lastname,
    status: payload.status,
    loginStatus: payload.loginStatus
  }

  const regisUser = await RegisUser.create(info)
  return regisUser
  // res.status(200).send(regisUser)

}

const getAllRegisUser = async (req, res) => {
  // console.log(`this is ${regisUser}`)

  let regisUser = await RegisUser.findAll({})
  res.status(200).send(regisUser)

}

const getOneRegisUser = async (req, res) => {

  let id = req.params.id
  // console.log(id)
  let regisUser = await RegisUser.findOne({ where: {id : id }})
  res.status(200).send(regisUser)

}

const deleteRegisUser = async (req, res) => {

  let paramId = req.params.id
  // console.log(paramId)
  await RegisUser.destroy({
    where: {
      id: paramId,
    },
  },
  );
  res.status(200).send('record deleted')

}


const updateRegisUser = async (req, res) => {

  let id = req.params.id

  const regisUser = await RegisUser.update(req.body, { where: { id: id }})

  res.status(200).send("record updated")
 

}


module.exports = {
  addRegisUser,
  getAllRegisUser,
  getOneRegisUser,
  deleteRegisUser,
  updateRegisUser,
}
