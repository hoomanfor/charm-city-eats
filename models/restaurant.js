module.exports = (sequelize, DataTypes) => {
  const Restaurant = sequelize.define("Restaurant", {
    name: {
      type: DataTypes.STRING
    },
    address: {
      type: DataTypes.STRING
    },
    zip_code: {
      type: DataTypes.STRING
    },
    neighborhood: {
      type: DataTypes.STRING
    }
  });
  return Restaurant;
};