const { DATE } = require("sequelize")

module.exports = ( sequelize, DataTypes ) => {

  const Categories = sequelize.define('category', {
    FKCategID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });

  return Categories

}