const express = require("express");
const BookModel = require("../models/bookmodel");
const route = express.Router();

//ADD BOOKS{POST}
route.post("/", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      console.log("send all Field");
      return res.send({ message: "send all field" });
    }

    const newBook = {
      title: req.body.title,
      author: req.body.author,
      publishYear: req.body.publishYear,
    };

    const book = await BookModel.create(newBook);
    return res.send(book);
  } catch (e) {
    console.log(e.message);
    res.status(500).send({ message: e.message });
  }
});
//GET ALL BOOKS
route.get("/", async (req, res) => {
  try {
    const books = await BookModel.find();
    return res.status(201).send({
      count: books.length,
      data: books,
    });
  } catch (e) {
    console.log(e.message);
    res.status(500).send({ message: e.message });
  }
});

//GET BOOK BY ID

route.get("/:id", async (req, res) => {
  const { id } = req.params;
  const book = await BookModel.findById(id);
  res.send(book);
});
//UPDATE BOOK BY ID
route.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const UpdateBook = await BookModel.findByIdAndUpdate(id, req.body);

    if (!UpdateBook) {
      return res.json({ message: "BOOK NOT FOUND" });
    } else {
      res.send({ message: "BOOK UPDATED SUCCESSFULLY" });
    }
  } catch (e) {
    console.log(e);
    return res.send({ message: e.message });
  }
});

//DELETE BOOK BY ID
route.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBook = await BookModel.findByIdAndDelete(id);
    if (!deletedBook) {
      return res.json({ message: "BOOK NOT DELETED" });
    }
    return res.send("BOOK WAS DELETED SUCCESSFULLY");
  } catch (e) {
    res.send(e.message);
  }
});
module.exports = route;
