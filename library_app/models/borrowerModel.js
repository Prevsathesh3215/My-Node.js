// const { DATE } = require("sequelize")
// const { sequelize } = require('./setup_db.js')
// const { Sequelize, DataTypes } = require('sequelize')
const Books = require('./bookModel')

module.exports = (sequelize, DataTypes) => {
  const Borrower = sequelize.define('borrower', {
    bookId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'books',
        key: 'bookId'
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    contactInfo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    PKborrowerID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    checkoutDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    dueDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    returnDate: {
      type: DataTypes.DATE,
      allowNull: true,
    }
  });
  return Borrower
  
}

