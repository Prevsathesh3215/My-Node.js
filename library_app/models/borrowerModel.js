const { DATE } = require("sequelize")

module.exports = ( sequelize, DataTypes ) => {

  const Borrower = sequelize.define('borrower', {
    bookId: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
      allowNull: true,
      primaryKey: true
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