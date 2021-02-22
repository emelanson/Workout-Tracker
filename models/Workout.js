const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: { type: Date, default: Date.now },

    exercises: [{
        type: { type: String, required: true },
        name: { type: String, required: true },
        weight: { type: Number },
        sets: { type: Number },
        reps: { type: Number },
        duration: { type: Number },
        distance: { type: Number },
    }]
}, //include computed property on JSON for stats
    { toJSON: { virtuals: true } }
);

WorkoutSchema.virtual("totalDuration").get(function () {
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0);
});

//compile to model
const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
