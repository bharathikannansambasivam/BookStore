const express = require("express");
const { PORT, MONGOURL } = require("./config");
const BookRoute = require("./routes/route");
const BookModel = require("./models/bookmodel");
const cors = require("cors");
const port = PORT;

const app = express();
app.use(cors());
const { default: mongoose } = require("mongoose");

app.use(express.json());


app.use("/books", BookRoute);

app.get("/", (req, res) => {
  res.send("hello");
});mongoose
  .connect(MONGOURL)
  .then(() => {
    console.log("APP connected TO Database");
    app.listen(PORT, () => {
      console.log(`PORT RUNNING ON ${PORT}`);
    });
  })
  .catch((e) => {
    console.log(e.message);
  });
