import { CheckSquare } from "phosphor-react";
import React, { useContext } from "react";
import AuthContext from "../Auth/authContext";

const PostNowHeader = () => {
  const { currUser } = useContext(AuthContext);

  return (
    <div className="xl:m-10 bg-white pb-20 pt-10 sm:pb-15 flex flex-col justify-evenly items-center bg-white bg-opacity-100 sm:bg-opacity-50 sm:rounded">
      <h3 className="py-5 sm:py-0 lg:w-8/12 mt-10 lg:mt-0 text-deep-purple-accent-400 font-bold text-center text-4xl">
        Hey, {currUser.username}{" "}! <br></br>
        This space for your future{" "}
      </h3>
      <p className="text-black text-center lg:px-20">
        Post new transfer request and make sure your dream place {""}
        <CheckSquare className="inline-block" size={24} />
      </p>
    </div>
  );
};

export default PostNowHeader;