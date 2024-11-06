const { USER, PASSWORD } = require('../secret.js')

module.exports = {
  HOST: '127.0.0.1',
  USER: USER,
  PASSWORD: PASSWORD,
  DB: 'library_db',
  dialect: 'mysql', 
  pool: {
  max: 5,
  min: 0,
  acquire: 30000,
  idle: 10000
}
}