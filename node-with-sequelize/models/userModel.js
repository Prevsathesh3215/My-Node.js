
module.exports = (sequelize, DataTypes) => {

  const Users = sequelize.define("users", {
    id: {
      type: DataTypes.STRING,
      allowNull: true,
      primaryKey : true
    },
    fullname: {
      type: DataTypes.STRING,
      allowNull: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull : true
    },
    password: {
      type: DataTypes.STRING,
      allowNull : true
    }
  });

  return Users

}

