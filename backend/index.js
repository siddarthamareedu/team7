const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserModel = require("./models/users");

const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
const DB =
  "mongodb+srv://team7:team7_123@cluster0.l793gjv.mongodb.net/mern?retryWrites=true&w=majority";

mongoose
  .connect(DB)
  .then(() => {
    console.log(`connection successful`);
  })
  .catch((err) => console.log(`no connection`));

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection successful");
});

app.get("/getUsers", async (req, res) => {
  const allUser = await UserModel.find({});
  // console.log(`${allUser}`);
  res.send(allUser);
});

app.post("/createUser", async (req, res) => {
  const user = req.body;
  const newUser = new UserModel(user);
  await newUser.save();

  res.json(user);
});
app.listen(3001, () => {
  console.log("Server Running");
});
