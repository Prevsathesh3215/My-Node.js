// const { DATE } = require("sequelize")
// const { sequelize } = require('./setup_db.js')
const Category = require('./categModel')


module.exports = (sequelize, DataTypes) => {
  const Books = sequelize.define('book', {
    bookId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: true
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    pubDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    condition: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    FKCategID: {
      type: DataTypes.INTEGER,
      references: {
        model: 'categories',
        key: 'FKCategID'
      }
    }
  },{
    tableName: 'books'
  });
  return Books
}


