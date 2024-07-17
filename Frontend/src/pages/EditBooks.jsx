import React, { useEffect, useState } from "react";
import axios from "axios";
import Backbutton from "../components/Backbutton";
import Spinner from "../components/Spinner";
import { useNavigate, useParams } from "react-router-dom";

const EditBooks = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://bookstore-3ds.onrender.com/books/${id}`)
      .then((res) => {
        const { title, author, publishYear } = res.data;
        setTitle(title);
        setAuthor(author);
        setPublishYear(publishYear);
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        alert("An error occurred, please check the console");
        console.log(e);
      });
  }, [id]);

  const handleEditBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios
      .put(`https://bookstore-3ds.onrender.com/books/${id}`, data)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((e) => {
        setLoading(false);
        alert("An error occurred, please check the console");
        console.log(e);
      });
  };

  return (
    <div className="p-4">
      <Backbutton />
      <h1 className="text-2xl font-bold">EDIT BOOK</h1>
      {loading ? <Spinner /> : ""}

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
          onClick={handleEditBook}
        >
          SAVE
        </button>
      </div>
    </div>
  );
};

export default EditBooks;
