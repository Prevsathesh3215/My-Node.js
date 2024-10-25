module.exports = (sequelize, DataTypes) => {

  const Units = sequelize.define("units", {
    id: {
      type: DataTypes.STRING,
      allowNull: true,
      primaryKey: true
    },
    unitid: {
      type: DataTypes.STRING,
      allowNull: true
    },
    meta: {
      type: DataTypes.STRING,
      allowNull : true
    },
    assetName: {
      type: DataTypes.STRING,
      allowNull : true
    }
  });

  return Units

}
