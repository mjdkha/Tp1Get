var express = require("express");
const axios = require("axios");
const LINK_UNIVERSITIES = 'http://universities.hipolabs.com/search?country=morocco';
const app = express();
app.set("view engine", "ejs");
app.listen(5555, () => {
    console.log("Server running on port 5555");
    app.get('/', async (req, res) => {
        try {
            const { data } = await axios.get(LINK_UNIVERSITIES);
            res.render("index", {
                universities: data,
            });
        } catch (ex) {
            res.status(500).send(ex.data);
        }

    });
});

