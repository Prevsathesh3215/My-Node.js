const { jwtSecret } = require('./secret.js')

module.exports = {
  jwtSecret: jwtSecret,
  jwtExpirationInSeconds: 60 * 60, // 1 hour
  roles: {
    USER: 'user',
    ADMIN: 'admin'
  }
}
