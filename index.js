var express = require("express");
const axios = require("axios");
const app = express();

const universityRoute = require('./routes/university.routes')


app.listen(5556, () => {
    console.log("Server running on port 5556");
});

app.use('/', universityRoute)