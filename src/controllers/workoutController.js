
const workoutService = require('../services/workoutService');
//different controller method declare
const getAllWorkouts = (req, res) => {
    const allworkouts = workoutService.getAllWorkouts();
    res.send({ status: "OK", data: allworkouts });
};

const getOneWorkout = (req, res) => {

    const workout = workoutService.getOneWorkout();
    res.send("Get an existing workout");
};

const createNewWorkout = (req, res) => {
    const { body } = req;
    // *** ADD ***
    if (
        !body.name ||
        !body.mode ||
        !body.equipment ||
        !body.exercises ||
        !body.trainerTips
    ) {
        return;
    }
    // *** ADD ***
    const newWorkout = {
        name: body.name,
        mode: body.mode,
        equipment: body.equipment,
        exercises: body.exercises,
        trainerTips: body.trainerTips,
    };
    const createworkout = workoutService.createNewWorkout(newWorkout);
    res.status(201).send({ status: "OK", data: createworkout });// we send 201 created status code
};

const updateOneWorkout = (req, res) => {
    const updateworkout = workoutService.updateOneWorkout();
    res.send("Update an existing workout");
};

const deleteOneWorkout = (req, res) => {
    const deleteworkout = workoutService.deleteOneWorkout();
    res.send("Delete an existing workout");
};

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout,
};