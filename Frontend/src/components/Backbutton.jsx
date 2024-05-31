import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

import React from "react";

function Backbutton({ destination = "/" }) {
  return (
    <div className="flex">
      <Link
        to={destination}
        className="bg-blue-800 hover:bg-blue-900 text-white px-4 py-2 rounded-lg flex items-center"
      >
        <BsArrowLeft className="text-2xl mr-2" />
        Back
      </Link>
    </div>
  );
}

export default Backbutton;
