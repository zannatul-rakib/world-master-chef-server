const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("word master chef is running on server");
});

app.listen(port, () => {
  console.log(`world master chef is running on port ${port}`);
});
