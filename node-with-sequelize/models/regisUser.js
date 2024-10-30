
module.exports = (sequelize, DataTypes) => {

  const regisUser = sequelize.define("regisUser",  {

    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },

    username: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true
    },

    email: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false
    },

    age: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    role: {
      type: DataTypes.STRING,
      allowNull: false
    },

    firstname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    
    lastname: {
      type: DataTypes.STRING,
      allowNull: false
    },

    status: {
      type: DataTypes.STRING,
      allowNull: false
    },

    loginStatus: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  return regisUser


}