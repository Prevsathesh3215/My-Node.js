const { Sequelize, DataTypes } = require("sequelize");
const dbConfig = require('../config/db_config.js');

// SET UP CONNECTION TO MYSQL THRU SEQUELIZE
const sequelize = new Sequelize(
  dbConfig.DB,
  dbConfig.USER,
  dbConfig.PASSWORD,
   {
     host: dbConfig.HOST,
     dialect: dbConfig.dialect,
     operationsAliases: false,
     port : 3006,
     pool: {
       max: dbConfig.pool.max,
       min: dbConfig.pool.min,
       acquire: dbConfig.pool.acquire,
       idle: dbConfig.pool.idle
       }
   }
 );

//AUTHENTICATE CONNECTION
sequelize.authenticate().then(() => {
   console.log('Connection has been established successfully.');
}).catch((error) => {
   console.error('Unable to connect to the database: ', error);
});


const db  = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users  = require('../models/userModel.js')(sequelize, DataTypes)
db.units = require('../models/unitsModel.js')(sequelize, DataTypes)
db.unitsData = require('./unitDataModel.js')(sequelize, DataTypes)
db.regisUser = require('./regisUser.js')(sequelize, DataTypes)


sequelize.sync({ force : false})
.then(() => {
  console.log('All tables created successfully!');
}).catch((error) => {
  console.error('Unable to create table : ', error);
});

module.exports = db;