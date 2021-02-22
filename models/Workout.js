const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    // date: { type: Date },

    exercises: [{
        type: { type: String, required: true },
        name: { type: String, required: true },
        weight: { type: Number },
        sets: { type: Number },
        reps: { type: Number },
        duration: { type: Number },
        distance: { type: Number },
    }]
});

//compile to model
const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
