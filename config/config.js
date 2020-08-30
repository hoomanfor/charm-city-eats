require('dotenv').config();
module.exports = {
  "development": {
    "username": process.env.SEQUELIZE_USER,
    "password": process.env.SEQUELIZE_PASSWORD,
    "database": "city_eats_db",
    "host": "localhost",
    "port": 3306,
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "use_env_variable": "JAWSDB_URL",
    "dialect": "mysql"
  }
}
