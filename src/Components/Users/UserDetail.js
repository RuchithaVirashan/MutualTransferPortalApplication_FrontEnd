import React, { useContext } from "react";
import AuthContext from "../Auth/authContext";

const UserDetail = () => {
  const { currUser } = useContext(AuthContext);

  return (
    <div className="mb-4 lg:mb-6 shadow-xl text-white rounded-2xl bg-gradient-to-r from-deep-purple-accent-200 via-deep-purple to-purple-200 px-4 py-2  lg:py-4 font-mono rounded flex flex-col sm:items-auto justify-auto   sm:mx-auto">
      <p>Username: {currUser.username ? currUser.username : "N/A"}</p>
      <p>First Name: {currUser.firstName ? currUser.firstName : "N/A"}</p>
      <p>Last Name: {currUser.lastName ? currUser.lastName : "N/A"}</p>
      <p>Email: {currUser.email ? currUser.email : "N/A"}</p>
      <p>Phone: {currUser.phone ? currUser.phone : "N/A"}</p>
      <p>Designation: {currUser.designation ? currUser.designation : "N/A"}</p>
    </div>
  );
};

export default UserDetail;