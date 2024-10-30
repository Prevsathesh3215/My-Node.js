const db = require('../models/setupdb.js')


const Users = db.users



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

  let id = req.params.id
  console.log(id)
  let users = await Users.findOne({ where: {id : id }})
  res.status(200).send(users)


}


const deleteUser = async (req, res) => {

  let paramId = req.params.id
  console.log(paramId)
  await Users.destroy({
    where: {
      id: paramId,
    },
  },
  );
  res.status(200).send('record deleted')

}


const updateUser = async (req, res) => {

  let id = req.params.id

  const user = await Users.update(req.body, { where: { id: id }})

  res.status(200).send("record updated")
 

}

module.exports = {
  addUsers,
  getAllUsers,
  getOneUser,
  deleteUser,
  updateUser,
}
