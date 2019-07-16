// import express
// import burger.js
// create the router
var express = require("express");
var db = require("../models");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    console.log("inside / route");
    db.Burger.findAll().then(function (data) {
        res.render("index", { burgers_data: data });
    });
});

router.post("/api/burgers", function (req, res) {
    console.log("burger name in api: " + req.body.name);
    db.Burger.create({
        burger_name: req.body.name
    }).then(function (result) {
        // Send back the ID of the new quote
        res.redirect("/");
    });
});

router.put("/api/burgers/:id", function (req, res) {
    //   console.log("condition", condition);

    db.Burger.update({
        devoured: req.body.devoured
    },
        {
            where:
            {
                id: req.params.id
            }
        }).then(function (result) {
            res.json("/")
        });
});

router.delete("/api/burgers/:id", function (req, res) {
    
    db.Burger.destroy({
        where:
        {
            id: req.params.id
        }
    }).then(function (result) {
            res.json("/")
        })
});

// Export routes for server.js to use.
module.exports = router;
