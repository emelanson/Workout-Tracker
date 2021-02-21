const path = require("path");
const { Workout } = require("../models");
require('mongoose');

module.exports = function (app) {
    //HTML routes
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    app.get("/stats", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/stats.html"));
    });

    app.get("/exercise", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
    });

    //API Routes
    app.post("/api/workouts", (req, res) => {
        console.log(req.body);
        Workout.create(req.body)
            .then(db => { res.json(db) })
            .catch(err => { res.status(400).json(err); });
    });

    app.put("/api/workouts/:id", (req, res) => {
        console.log(req.body);
        // Workout.create(req.body)
        //     .then(db => { res.json(db) })
        //     .catch(err => { res.status(400).json(err); });
    });



}