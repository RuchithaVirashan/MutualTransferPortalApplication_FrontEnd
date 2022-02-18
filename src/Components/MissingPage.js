import React from "react";
import Error404 from "../Assets/MissingPage.png";
import { Link } from "react-router-dom";

const MissingPage = () => {
  return (
    <div className="py-20 md:pb-8 md:pl-20 flex flex-col md:flex-row lg:pl-20 lg:py-0 justify-center md:items-center">
      <Link className="text-center text-lg font-mono" to="/home">
        Back to{" "}
        <span className="underline text-xl md:text-4xl text-black transition-colors duration-300 hover:text-deep-purple-accent-400">
          Homepage
        </span>
      </Link>
      <img className=" mx-auto w-12/12 md:w-2/3" src={Error404}></img>
    </div>
  );
};

export default MissingPage;