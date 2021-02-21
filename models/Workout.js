const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    Day: Date,
    Type: String,
    Name: String,
    Weight: Number,
    Sets: Number,
    Reps: Number,
    Duration: Number,
    Distance: Number
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
