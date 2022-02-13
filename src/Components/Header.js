import React from "react";
import HeaderSVG from "./HeaderSVG";

const Header = ({ title, category, description }) => {
  return (
    <div className=" rounded-lg mb-4 sm:mb-6 lg:mb-9 bg-gray-50 px-4 pb-1 pt-2 sm:py-3 md:pt-6 md:pb-3 lg:pt-20 mx-auto w-9/12 sm:w-7/12 md:px-24 lg:px-8">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            {category}
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <HeaderSVG />
            <span className="relative"></span>
          </span>{" "}
          {title}
        </h2>
        <p className="text-base text-gray-700 md:text-lg">{description}</p>
      </div>
    </div>
  );
};

export default Header;