module.exports = (sequelize, DataTypes) => {

  const UnitsData = sequelize.define("unitsdata", {
    time: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    mileage: {
      type: DataTypes.STRING,
      allowNull: true
    },
    speed: {
      type: DataTypes.FLOAT,
      allowNull : true
    },
    longitude: {
      type: DataTypes.FLOAT,
      allowNull : true
    },
    ignition : {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }, 
    meta:{
      type: DataTypes.STRING,
      allowNull: true
    },
    unitid: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  });

  return UnitsData

}