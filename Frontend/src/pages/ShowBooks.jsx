import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackButton from "../components/Backbutton";
import Spinner from "../components/Spinner";

const ShowBooks = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://bookstore-3ds.onrender.com/books/${id}`)
      .then((res) => {
        setBook(res.data);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
      });
  }, [id]);

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">SHOW BOOKS</h1>

      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col border-2 border-sky-400 p-4 rounded-xl">
          <div className="flex items-center my-2">
            <span className="text-xl mr-4 font-bold">ID:</span>
            <span>{book._id}</span>
          </div>
          <div className="flex items-center my-2">
            <span className="text-xl mr-4 font-bold">Title:</span>
            <span>{book.title}</span>
          </div>
          <div className="flex items-center my-2">
            <span className="text-xl mr-4 font-bold">Author:</span>
            <span>{book.author}</span>
          </div>
          <div className="flex items-center my-2">
            <span className="text-xl mr-4 font-bold">Publish Year:</span>
            <span>{book.publishYear}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowBooks;
