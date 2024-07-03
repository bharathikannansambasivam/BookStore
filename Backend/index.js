require("dotenv").config();

const express = require("express");
const { PORT, MONGOURL } = require("./config");
const BookRoute = require("./routes/route");
const BookModel = require("./models/bookmodel");
const port = process.env.PORT || 3000;
const mongoUri = process.env.MONGO_URI;
const cors = require("cors");

const app = express();
app.use(cors());
const { default: mongoose } = require("mongoose");
app.get("/", (req, res) => {
  res.send("hello");
});
app.use(express.json());
app.use("/books", BookRoute);
mongoose
  .connect(mongoUri)
  .then(() => {
    console.log("APP connected TO Database");
    app.listen(port, () => {
      console.log(`PORT RUNNING ON ${port}`);
    });
  })
  .catch((e) => {
    console.log(e.message);
  });
