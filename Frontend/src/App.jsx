import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CreateBook from "./pages/CreateBook";
import DeleteBooks from "./pages/DeleteBooks";
import EditBooks from "./pages/EditBooks";
import ShowBooks from "./pages/ShowBooks";

function App() {
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/books/create" element={<CreateBook />} />{" "}
    <Route path="/books/details/:id" element={<ShowBooks />} />
    <Route path="/books/edit/:id" element={<EditBooks />} />{" "}
    <Route path="/books/delete/:id" element={<DeleteBooks />} />
  </Routes>;
}

export default App;
