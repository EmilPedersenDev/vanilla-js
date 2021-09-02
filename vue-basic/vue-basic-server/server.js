const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Api",
  });
});

app.post("/user", (req, res) => {
  const { nickname, country, age, acceptedTerms } = req.body;

  res.json(req.body);
});

app.listen(3000, () => {
  console.log("running");
});
