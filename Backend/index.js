require("dotenv").config();

const express = require("express");
const BookRoute = require("./routes/route");
const port = process.env.PORT || 5555;
const mongoUri = process.env.MONGO_URI;
const cors = require("cors");

const app = express();
app.use(
  cors({
    origin: " http://127.0.0.1:5173/",
    methods: ["POST", "GET"],
    credentials: true,
  })
);
const { default: mongoose } = require("mongoose");

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
