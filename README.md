# Charm City Eats 

This website is designed to help Baltimore's community catalog its amazing restaurants. As a community, we'll be able to keep each other informed and support our local businesses.

This website is hosted on Heroku: https://floating-harbor-81839.herokuapp.com/

## Installation

### Prerequisites
* [MySQL](https://www.mysql.com/downloads/)
* [Node.js](https://nodejs.org/en/)

Clone this repository:
```bash
git clone https://github.com/hoomanfor/charm-city-eats.git
```

Create this local MySQL Database using an application like [MySQL Workbench](https://www.mysql.com/products/workbench/):
```sql
CREATE DATABASE city_eats_db;
```

Create a `.env` file and place it in your root folder. The `.env` file must contain the following environmental variables:
```bash
DB_USERNAME=YOUR_DB_USERNAME
DB_PASSWORD=YOUR_DB_PASSWORD
DB_PORT=YOUR_DB_PORT_NUMBER
```

Run the following command inside your root folder to install the required NPM packages:
```bash
npm install
```

Run the following command inside your root folder to create the required `Restaurants` table:
```bash
sequelize db:migrate
```

Run the following command inside your root folder to seed your local database with [Open Baltimore's](https://data.baltimorecity.gov/)   [list of every restaurant in the city](https://data.baltimorecity.gov/Culture-Arts/Restaurants/k5ry-ef3g):
```bash
sequelize db:seed:all
```

Run your node server:
```bash
npm run start
```

Contact me here if you have any questions :raised_hands:
```bash
hoomanfor@gmail.com
```