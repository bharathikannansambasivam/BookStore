import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Backbutton from "../components/Backbutton";
import Spinner from "../components/Spinner";

const CreateBook = () => {
  console.log("CreateBook component rendered");

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSaveBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios
      .post("https://bookstore-3ds.onrender.com/books", data)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((e) => {
        setLoading(false);
        alert("An error occurred, check console");
        console.log(e);
      });
  };

  return (
    <div className="p-4">
      <Backbutton />
      <h1 className="text-2xl font-bold">CREATE BOOK</h1>
      {loading && <Spinner />}

      <div className="flex flex-col border-2 border-sky-400 w-[600px] mx-auto p-8">
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Publish Year</label>
          <input
            type="text"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <button
          className="p-2 bg-sky-500 m-8 rounded-lg"
          onClick={handleSaveBook}
        >
          SAVE
        </button>
      </div>
    </div>
  );
};

export default CreateBook;
