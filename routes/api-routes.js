// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring the Restaurant model
const db = require("../models");

// Routes
// =============================================================
module.exports = (app) => {

  // GET route for getting all of the restaurants 
  app.get("/api/restaurants/", (req, res) => {
    db.Restaurant.findAll({})
      .then((dbRestaurants) => {
        res.json(dbRestaurants);
      });
  });


  // POST route for adding a new restaurants
  app.post("/api/restaurants", (req, res) => {
    console.log(req.body);
    db.Restaurant.create({
      name: req.body.name,
      address: req.body.address,
      zip_code: req.body.zip_code,
      neighborhood: req.body.neighborhood
    })
      .then((dbRestaurant) => {
        res.json(dbRestaurant);
      });
  });

  // DELETE route for removing closed restaurants
  app.delete("/api/restaurants/:id", (req, res) => {
    db.Restaurant.destroy({
      where: {
        id: req.params.id
      }
    })
      .then((dbRestaurant) => {
        res.json(dbRestaurant);
      });
  });

  // PUT route for updating a restaurant
  app.put("/api/restaurants", (req, res) => {
    db.Restaurant.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
      .then((dbRestaurant) => {
        res.json(dbRestaurant);
      });
  });

};
