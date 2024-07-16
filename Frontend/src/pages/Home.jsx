import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://bookstore-3ds.onrender.com/books")
      .then((res) => {
        setBooks(res.data.data);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8">Booklist</h1>
        <Link to="/books/create">
          <MdOutlineAddBox className="text-4xl text-sky-800" />
        </Link>
      </div>

      {loading ? (
        <Spinner />
      ) : (
        <table className="w-full">
          <thead>
            <tr>
              <th className="border border-slate-600 rounded-md px-4 py-2">
                No
              </th>
              <th className="border border-slate-600 rounded-md px-4 py-2">
                Title
              </th>
              <th className="border border-slate-600 rounded-md px-4 py-2">
                Author
              </th>
              <th className="border border-slate-600 rounded-md px-4 py-2">
                PublishYear
              </th>
              <th className="border border-slate-600 rounded-md px-4 py-2">
                Operations
              </th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr key={book._id} className="h-8">
                <td className="border border-slate-700 rounded-md text-center px-4 py-2">
                  {index + 1}
                </td>
                <td className="border border-slate-700 rounded-md text-center px-4 py-2">
                  {book.title}
                </td>
                <td className="border border-slate-700 rounded-md text-center px-4 py-2">
                  {book.author}
                </td>
                <td className="border border-slate-700 rounded-md text-center px-4 py-2">
                  {book.publishYear}
                </td>
                <td className="border border-slate-700 rounded-md text-center px-4 py-2">
                  <div className="flex justify-center gap-x-4">
                    <Link to={`/books/details/${book._id}`}>
                      <BsInfoCircle className="text-2xl text-green-800" />
                    </Link>
                    <Link to={`/books/edit/${book._id}`}>
                      <AiOutlineEdit className="text-2xl text-yellow-600" />
                    </Link>
                    <Link to={`/books/delete/${book._id}`}>
                      <MdOutlineDelete className="text-2xl text-red-600" />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Home;
