'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Restaurants', {
      "id": {
        "type": Sequelize.INTEGER,
        "autoIncrement": true,
        "primaryKey": true,
        "allowNull": false
      },
      "name": {
        "type": Sequelize.STRING,
        "unique": false,
        "allowNull": false
      },
      "address": {
        "type": Sequelize.STRING,
        "unique": false,
        "allowNull": false
      },
      "zip_code": {
        "type": Sequelize.STRING,
        "unique": false,
        "allowNull": false
      },
      "neighborhood": {
        "type": Sequelize.STRING,
        "unique": false,
        "defaultValue": "Neighborhood information not provided."
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Restaurants');
  }
};
