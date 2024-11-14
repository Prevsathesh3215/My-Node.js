module.exports = (sequelize, DataTypes) => {

  const Units = sequelize.define("units", {
    unitid: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true, 
      unique: true
    },
    meta: {
      type: DataTypes.STRING,
      allowNull : true
    },
    assetName: {
      type: DataTypes.STRING,
      allowNull : true
    }

  },{
    tableName: 'units',
    initialAutoIncrement: 1001,
    timestamps: false
  });

  return Units

}
