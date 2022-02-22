import { Checks } from "phosphor-react";
import React, { useContext } from "react";
import AuthContext from "./Auth/authContext";

const AdminHeader = () => {
  const { currUser } = useContext(AuthContext);

  return (
    <div className="xl:m-10 bg-white pb-20 pt-10 sm:pb-15 flex flex-col justify-evenly items-center bg-white bg-opacity-100 sm:bg-opacity-50 sm:rounded">
      <h3 className="py-5 sm:py-0 lg:w-8/12 mt-10 lg:mt-0 text-red-accent-400 font-bold text-center text-6xl">
        Welcome, Admin!{" "}
      </h3>
      <p className="text-black text-center lg:px-20">
        You have successfully logged in {currUser.username} {""}
        <Checks className="inline-block" size={24} />
      </p>
    </div>
  );
};

export default AdminHeader;