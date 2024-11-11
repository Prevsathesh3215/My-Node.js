const regisUserController = require('../controller/regisUserController.js')
const { encryptPswd } = require('../helper/encryptPassword.js')
const db = require('../models/setupdb.js')
const { generateAccessToken } = require('../helper/generateAccessToken.js')
const jwt = require('jsonwebtoken')
const { jwtSecret, roles } = require('../config')

const RegisUser = db.regisUser


async function registerUser(req, res){
  const payload = req.body
  // console.log(payload)

  try{
    //HOOK IN REGISUSER.JS HAS TAKEN OVER THIS FUNCTIONALITY
    // let encryptedPassword = await encryptPswd(payload.password);
    // payload.password = encryptedPassword

    if (!payload.role){
      payload.role =  roles.USER
    }


    const registeredUser = await regisUserController.addRegisUser(payload)

    // const accessToken = generateAccessToken(payload.username, payload.id)
    // console.log(accessToken)

    return res.status(200).json({
      status: true,
      data: {
        user: registeredUser.toJSON(),
        // token: accessToken,
      }
    })
  }
  catch (error){
    console.error(error);
      return res.status(500).json({
        status: false,
        message: 'Error registering user',
        error: error.message,
      });
  }
}


function userLogin(req, res, next){

  const authHeader = req.headers.authorization
  // console.log(authHeader.authorization)

  if (authHeader){
    jwt.verify(authHeader, jwtSecret, (err, decoded) => {

      if (err){
        res.status(403).json({
          success: "false",
          message: "invalid token"
        })
      }
      else{
        // res.status(200).json({
        //   success: "true",
        //   message: "Authorized, welcome to protected route",
        //   payload: decoded
        // })
        next()
      }
    })
  }
  else{
    res.status(401).json({
      success: "false",
      message: "token not provided"
    })
    
  }
  
}

async function checkLogin(req, res){

  payload = req.body

  if(payload.id === undefined){

    res.status(400).json({
      success: false,
      message: 'Error: Fields not stated.'
    })

  }
  else{
    
    RegisUser.findOne({ where : { id: payload.id }})
    .then((user) => {
      if (!user){
        return res.status(403).json({
          status: false,
          error: 'Username does not exist'
        })
      }
      else{
        const accessToken = generateAccessToken(payload.username, payload.id)
        res.status(200).json({
          success: true,
          message: `Welcome ${payload.username}`,
          token: accessToken
        })
      }
    })

  }

}



module.exports = {
  registerUser,
  userLogin,
  checkLogin
}

