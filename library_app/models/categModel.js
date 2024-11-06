// const { DATE } = require("sequelize")
// const { sequelize } = require('./setup_db.js')
// const { Sequelize, DataTypes } = require('sequelize')

// console.log(sequelize)

module.exports = (sequelize, DataTypes) => {

  const Categories = sequelize.define('category', {
    FKCategID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  },
  {
    tableName: 'categories'
  });
  return Categories
}

  


