const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
//ADD our Route of base URI
// const v1Router = require('./v1/routes');
const v1WorkoutRouter = require('./v1/routes/workoutRoutes');

// app.use("/api/v1", v1Router);
//bodyParser  Parse the request body into JS Object ( if content-type is application/JSON) or a HTML Form data where MIME type is application/x-www-form-urlencoded.
//Put above JS Object in req.body so that middleware can use the data.
app.use(bodyParser.json());
app.use("/api/v1/workouts", v1WorkoutRouter);
//we can remove it 
// app.get('/', (req, res) => {
//     res.send("<h1>Hello me Server</h1>");
// });
app.listen(PORT, () => {
    console.log(`server started running on ${PORT}`);
});