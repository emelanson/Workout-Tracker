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
    app.put("/api/workouts/:id", (req, res) => {
        console.log(req.body);
        Workout.create(req.body).then(workout => { res.json(workout) });

    });



}