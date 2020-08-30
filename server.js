// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
require('dotenv').config();
const express = require("express");


// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3000;

// Requiring our models for syncing
const db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

// Routes
// =============================================================
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

// Syncing the sequelize models and then starting the Express app
// =============================================================
db.sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
  });
});
