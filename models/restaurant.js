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
      "defaultValue": "Neighborhood information not provided."
    },
  }, {
    timestamps: false
  });
  return Restaurant;
};