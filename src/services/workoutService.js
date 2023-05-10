
const workout = require('../database/workout');
const { v4: uuid } = require("uuid");
const getAllWorkouts = () => {
    const allworkouts = workout.getAllworkouts();
    return allworkouts;
};

const getOneWorkout = () => {
    return;
};

const createNewWorkout = (newWorkout) => {
    // *** ADD ***
    const workoutToInsert = {
        ...newWorkout,
        id: uuid(), //uuid is used to give randow ids to store
        createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
        updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    };
    // *** ADD ***
    const createdWorkout = workout.createNewWorkout(workoutToInsert);
    return createdWorkout;
};

const updateOneWorkout = () => {
    return;
};

const deleteOneWorkout = () => {
    return;
};

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout,
};