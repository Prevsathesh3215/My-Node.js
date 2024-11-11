const { encryptPswd } = require('../helper/encryptPassword.js')


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
      unique: true,
      get(){
        const rawValue = this.getDataValue('username');
        
        let firstLetter = rawValue.charAt(0);
        firstLetter = firstLetter.toUpperCase();

        const remaining = rawValue.slice(1);

        return firstLetter + remaining;
      }

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


  regisUser.beforeCreate(async (user, options) => {
    user.password = await encryptPswd(user.password)
    console.log('Hook is being run')
  })

  return regisUser


}