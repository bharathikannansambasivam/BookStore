import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Backbutton from "../components/Backbutton";
import Spinner from "../components/Spinner";

const DeleteBooks = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5555/books/${id}`)
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
      <h1 className="text-2xl font-bold">DELETE BOOK</h1>
      {loading && <Spinner />}
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] mx-auto p-8">
        <h3 className="text-lg">Are you sure you want to delete this book?</h3>
        <button
          className="p-4 bg-red-600 text-white m-8 rounded-lg"
          onClick={handleDeleteBook}
        >
          Yes, Delete it
        </button>
      </div>
    </div>
  );
};

export default DeleteBooks;
