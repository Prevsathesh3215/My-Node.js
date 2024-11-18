// const { DATE } = require("sequelize")
// const { sequelize } = require('./setup_db.js')
const Category = require('./categModel')
const { capitalizeOneWord, capitalizeWords } = require('../utils/capitalize')


module.exports = (sequelize, DataTypes) => {
  const Books = sequelize.define('book', {
    bookId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      // defaultValue: 1001
    },
    title: {
      type: DataTypes.STRING,
      allowNull: true,
      set(value){
        this.setDataValue('title', capitalizeWords(value))
      }
      
    },
    author: {
      type: DataTypes.STRING,
      allowNull: true,
      set(value){
        this.setDataValue('author', capitalizeWords(value))
      }
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: true,
      set(value){
        this.setDataValue('genre', capitalizeOneWord(value))
      }
    },

    pubDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    
    condition: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        validateCondition(value){
          if (value != 'Excellent' && value != 'excellent' && value != 'Good' && value != 'good' && value != 'Poor' && value != 'poor'){
            throw new Error('Invalid condition entry')
          }
        }
      },
      set(value){
        this.setDataValue('condition', capitalizeOneWord(value))
      }
    },
    FKCategID: {
      type: DataTypes.INTEGER,
      references: {
        model: 'categories',
        key: 'FKCategID'
      },
      set(value){
        switch(this.genre){
          case 'Horror':
            value = 15;
            break;
          case 'Fiction':
            value = 11;
            break;
          case 'Fantasy':
            value = 12;
            break;
          case 'Non-Fiction':
            value = 14;
            break;
          case 'Romance': 
          value =  17;
            break;
        }
        this.setDataValue('FKCategID', value)
      }
    }
  },{
    tableName: 'books',
    initialAutoIncrement: 1001,
  });
  return Books
}


