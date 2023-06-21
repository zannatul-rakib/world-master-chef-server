const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
var cors = require("cors");
var chef = require("./data/chef.json");
var recipes = require("./data/recipes.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("word master chef is running on server");
});

app.get("/chef", (req, res) => {
  res.send(chef);
});

app.get("/chef/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  const result = chef.find((c) => c.id === id);
  res.send(result);
});

app.get("/recipes", (req, res) => {
  res.send(recipes);
});

app.listen(port, () => {
  console.log(`world master chef is running on port ${port}`);
});
