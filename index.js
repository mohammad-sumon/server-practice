const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const Port = process.env.Port || 5000;

const allUsers = require("./data/users.json");

app.get("/", (req, res) => {
  res.send("Now server is running");
});

app.get("/allusers", (req, res) => {
  res.send(allUsers);
});

app.get("/user/:id", (req, res) => {
  const id = req.params.id;
  const getSingleUser = allUsers?.find((user) => user.id == id);
  res.send(getSingleUser);

  if (!getSingleUser) {
    res.send("Kono user pai nai");
  }
  res.send(getSingleUser);
});

app.listen(Port, () => {
  console.log("Server is running", Port);
});
