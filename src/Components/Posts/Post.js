import { ArrowSquareDown, Article, Chats, Envelope, IdentificationCard, MapPin, MapPinLine, Phone, Student, User } from "phosphor-react";
import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import Api from "../../Api";
import AuthContext from "../Auth/authContext";
import ProtectedRoute from "../Auth/ProtectedRoute";
import Header from "../Header";
import PostCard from "./PostCard";
import PostDetail from "./PostDetail";

const Post = () => {
  const history = useHistory();
  const { currUser } = useContext(AuthContext);
  const [postss, setPost] = useState({
    username: "",
    NIC: "",
    email: "",
    phone: "",
    designation: "",
    perferedCity: "",
    perferedDistrict: "",
    description: "",
    currentWorkingCity: "",
    currentWorkingDistrict: "",
    currentWorkingPlace: "",
  });

  const { id } = useParams();
  console.log(typeof(id));

  useEffect(() => {
    const getPost = async (id) => {
      try{
      const res = await Api.setpostss(id);
      setPost(res);
      console.log(res);
    } catch (e) {
      console.log("CAUGHT AN ERROR");
      history.push("/missing");
    }
    };
    getPost(id);
    return () => {};
  }, []);

  return (
    <>
    {currUser.username ? (
    <div className="bg-gray-100">
      <Header 
        // designation={postss.designation} 
        // category="Post" 
        // description={postss.designation} 
        />

    <div className="relative pb-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 md:pt-10 lg:pb-20">
            <PostDetail
              title={postss.designation}
              username={postss.username}
              NIC={postss.nic}
              email={postss.email}
              phone={postss.phone}
              designation={postss.designation}
              perferedCity={postss.perferedCity}
              perferedDistrict={postss.perferedDistrict}
              currentWorkingCity={postss.currentWorkingCity}
              currentWorkingDistrict={postss.currentWorkingDistrict}
              currentWorkingPlace={postss.currentWorkingPlace}
              description={postss.description}
            />

            <div className="flex items-center justify-center mb-4 font-medium text-gray-500">
                <span className="inline-block">
                {" "}<Chats
                  className="text-deep-purple-accent-400"
                  size={34}
                />
                </span>
                Contact with
                <span className=" text-black">{postss.username}</span>

                <span className="inline-block">
                {" "}<ArrowSquareDown
                  className="text-deep-purple-accent-400"
                  size={34}
                />
                </span>
            </div>
      </div>
    </div>
    ) : (
      <ProtectedRoute />
    )}
  </>
  );
};

export default Post;