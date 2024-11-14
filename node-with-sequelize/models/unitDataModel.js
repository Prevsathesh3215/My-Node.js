module.exports = (sequelize, DataTypes) => {

  const UnitsData = sequelize.define("unitsdata", {
    time: {
      type: DataTypes.TIME,
      allowNull: true,
    },
    mileage: {
      type: DataTypes.FLOAT,
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
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: 'units',
        key: 'unitid'
      }
    }
  },{
    tableName: 'unitsdata',
    timestamps: false,
  });

  return UnitsData

}