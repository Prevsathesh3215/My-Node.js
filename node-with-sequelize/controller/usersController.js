const db = require('../models/setupdb.js')


const Users = db.users
const Units = db.units


const addUsers = async (req, res) => {

  console.log(`body is ${req.body}`)
  let info =  {
    id : req.body.id,
    fullname: req.body.fullname,
    username: req.body.username,
    password: req.body.password
  }

  const users = await Users.create(info)
  res.status(200).send(users)

}


const getAllUsers = async (req, res) => {
    console.log(`this is ${Users}`)

    let users = await Users.findAll({})
    res.status(200).send(users)

} 

const getOneUser = async (req, res) => {

  let id = req.query.id
  console.log(id)
  let users = await Users.findOne({ where: {id : id }})
  res.status(200).send(users)


}


const getPublishedUser = async (req, res) => {

  let users = await Users.findAll({ where: {published : true }})
  res.status(200).send(users)


}


const deleteUser = async (req, res) => {

  let paramId = req.query.id
  console.log(paramId)
  await Users.destroy({
    where: {
      id: paramId,
    },
  },
  );

}

module.exports = {
  addUsers,
  getAllUsers,
  getOneUser,
  getPublishedUser,
  deleteUser
}
