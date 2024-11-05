const { DATE } = require("sequelize")

module.exports = ( sequelize, DataTypes ) => {

  const Books = sequelize.define('book', {
    bookId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
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
      allowNull: false,
    }
  });

  return Books

}