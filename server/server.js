const express = require ("express");
const path = require("path");
const bodyParser = require("body-parser");
const db = require("./knex")

const PORT = process.env.PORT || 5000;
const app = express();

// Serve static assets
app.use(express.static(path.resolve(__dirname, "..", "dist")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api', async (req, res) => {
    try {
        const jokes = await db.select().table("jokes");
        res.json(jokes);
    } catch (err) {
        console.error("Error loading jokes!", err);
        res.sendStatus(500);
    }    
});
  
app.patch('/api/:likeOrDislike', async (req, res) => {
    const likeOrDislike = req.params.likeOrDislike;
    if(likeOrDislike === "like") {
        try {
            const table = await db.select().table("table");
            // console.log(table[0].like);
            const result = await db.table("table").update({"like": table[0].like + 1});
            res.json(result);
        } catch (err) {
            console.error("Error updating table!", err);
            res.sendStatus(500);    
        }
    } else if (likeOrDislike === "dislike") {
        try {
            const table = await db.select().table("table");
            // console.log(table[0].dislike);
            const result = await db.table("table").update({"dislike": table[0].dislike + 1});
            res.json(result);
        } catch (err) {
            console.error("Error updating table!", err);
            res.sendStatus(500);
        }
    }
});

// Always return the main index.html, so react-router render the route in the client
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "..", "dist", "index.html"));
});

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
});