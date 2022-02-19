import React, { useContext } from "react";
import AuthContext from "../Auth/authContext";
import ProtectedRoute from "../Auth/ProtectedRoute";
import PostNowForm from "./PostNowForm";
import "./PostNow.css"
import PostNowHeader from "./PostNowHeader";

const PostNow = () => {
  const { currUser } = useContext(AuthContext);
  return (
    <>
      {currUser.username ? (
        <>
        <div className="bg-gray-100 sm:py-3 md:py-5 lg:py-10">
        <div className="PostNow bg-opacity-50 grid sm:p-10 lg:p-5 sm:rounded shadow-2xl grid-cols-1 lg:grid-cols-2 sm:mx-auto md:w-8/12 sm:w-10/12 bg-gray-900">
            <PostNowHeader />
            <div className="px-10 py-10">
              <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                <PostNowForm />
              </div>
            </div>
          </div>
        </div>
      </>
      ) : (
        <ProtectedRoute />
      )}
    </>
  );
};

export default PostNow;