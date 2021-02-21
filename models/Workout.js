const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    Day: { type: Date },

    exercises: [{
        Type: { type: String },
        Name: { type: String },
        Weight: { type: Number },
        Sets: { type: Number },
        Reps: { type: Number },
        Duration: { type: Number },
        Distance: { type: Number },
    }]
});

//compile to model
const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
