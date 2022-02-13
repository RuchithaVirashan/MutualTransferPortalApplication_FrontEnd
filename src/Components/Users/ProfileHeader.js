import React, { useContext } from "react";
import AuthContext from "../Auth/authContext";
import HeaderSVG from "../HeaderSVG";

const ProfileHeader = () => {
  const { currUser } = useContext(AuthContext);
  return (
    <div className="flex flex-col justify-evenly items-center">
      <h3 className="mt-10 lg:mt-0 text-teal-accent-400 font-bold text-center text-6xl">
        Welcome, {currUser.username}!{" "}
      </h3>
      {/* <p className="text-teal-accent-400 ">
        So far, you have applied to {currUser.applications.length} jobs.
      </p> */}
    </div>
  );
};

export default ProfileHeader;