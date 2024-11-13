const jwt = require('jsonwebtoken')
const { jwtExpirationInSeconds, jwtSecret } = require('../config')


const generateAccessToken = (username, userId) => {

  return jwt.sign(
    {
      userId,
      username,
    },
    jwtSecret,
    {
      expiresIn :jwtExpirationInSeconds
    }
  );

  

};

module.exports =  {
  generateAccessToken
}