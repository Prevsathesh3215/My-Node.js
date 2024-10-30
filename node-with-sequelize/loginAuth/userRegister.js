const regisUserController = require('../controller/regisUserController.js')
const { encryptPswd } = require('../helper/encryptPassword.js')
const db = require('../models/setupdb.js')
const { generateAccessToken } = require('../helper/generateAccessToken.js')
const jwt = require('jsonwebtoken')
const { jwtSecret } = require('../config')

const RegisUser = db.regisUser


async function registerUser(req, res){
  const payload = req.body
  // console.log(payload)

  try{
    let encryptedPassword = await encryptPswd(payload.password);
    payload.password = encryptedPassword


    const registeredUser = await regisUserController.addRegisUser(payload)

    const accessToken = generateAccessToken(payload.username, payload.id)
    // console.log(accessToken)

    return res.status(200).json({
      status: true,
      data: {
        user: registeredUser.toJSON(),
        token: accessToken,
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

      if(err){
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



module.exports = {
  registerUser,
  userLogin
}
