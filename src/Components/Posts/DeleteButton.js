import { Trash } from "phosphor-react";
import React from "react";

const DeleteButton = ({handleClick}) => {
  return (
    <button
            onClick={handleClick}
            className={` bg-red-accent-400 cursor-pointer inline-flex items-center justify-center h-12 px-6 font-medium text-white bg:red-accent-400 hover:red-accent-700 hover foxus:shadow-outline focus:outline-none transition-duration-200 rounded`}
        >
            Delete {""}
            <Trash size={23} />
        </button>
  );
};

export default DeleteButton;