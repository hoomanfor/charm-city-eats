module.exports = (sequelize, DataTypes) => {
  const Restaurant = sequelize.define("Restaurant", {
    "id": {
      "type": DataTypes.INTEGER,
      "autoIncrement": true,
      "primaryKey": true,
      "allowNull": false
    },
    "name": {
      "type": DataTypes.STRING,
      "unique": false,
      "allowNull": false
    },
    "address": {
      "type": DataTypes.STRING,
      "unique": false,
      "allowNull": false
    },
    "zip_code": {
      "type": DataTypes.STRING,
      "unique": false,
      "allowNull": false
    },
    "neighborhood": {
      "type": DataTypes.STRING,
      "unique": false,
      "allowNull": false
    },
    "createdAt": {
      "type": DataTypes.DATE,
      "defaultValue": sequelize.literal('CURRENT_TIMESTAMP')
    },
    "updatedAt": {
      "type": DataTypes.DATE,
      "defaultValue": sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
    }
  });
  return Restaurant;
};