const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const Port = 3000;
const connectDb = require("./db-connect");

connectDb();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

require("./controller/user")(app);

app.listen(Port, () => {
  console.log(`Server is listening on ${Port}${path} `);
});
