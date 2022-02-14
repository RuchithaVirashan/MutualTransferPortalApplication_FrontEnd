import { ArrowSquareDown, Article, Chats, Envelope, IdentificationCard, MapPin, MapPinLine, Phone, Student, User } from "phosphor-react";
import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import Api from "../../Api";
import AuthContext from "../Auth/authContext";
import ProtectedRoute from "../Auth/ProtectedRoute";
import Header from "../Header";
import PostCard from "./PostCard";

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

  // //Retreve Post
  // const retrievePost =async (data) =>{
  //   const response = await api.get(`/post/${data}`);
  //   return response.data;
  // };

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
        designation={postss.designation} 
        category="Post" 
        description={postss.designation} 
        />

      <div className="relative px-4 pb-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-0 lg:pb-20">
      <div className="mb-4 lg:mb-6 shadow-xl text-white rounded-2xl bg-gradient-to-r from-deep-purple-accent-200 via-deep-purple to-purple-200 px-4 py-2  lg:py-4 font-mono rounded flex flex-col sm:items-center justify-auto   sm:mx-auto">
          <p>
            <span className="inline-block">
              {" "} <User size={16} /> </span> 
              {" "} Username: {postss.username ? postss.username : "N/A"}
          </p>
          <p>
            <span className="inline-block">
              {" "} <IdentificationCard size={16} /> </span>
              {" "} NIC: {postss.NIC ? postss.NIC : "N/A"}
          </p>
          <p>
            <span className="inline-block">
              {" "} <Envelope size={16} /> </span>
              {" "} Email: {postss.email ? postss.email : "N/A"}
          </p>
          <p><span className="inline-block">
              {" "} <Phone size={16} /> </span>
              {" "} Phone: {postss.phone ? postss.phone : "N/A"}</p>
          <p><span className="inline-block">
              {" "} <Student size={16} /> </span>
              {" "} Designation: {postss.designation ? postss.designation : "N/A"}</p>
          <p><span className="inline-block">
              {" "} <MapPin size={16} /> </span>
              {" "} Perfered City: {postss.perferedCity ? postss.perferedCity : "N/A"}</p>
          <p><span className="inline-block">
              {" "} <MapPin size={16} /> </span>
              {" "} Perfered District: {postss.perferedDistrict ? postss.perferedDistrict : "N/A"}</p>
          <p><span className="inline-block">
              {" "} <MapPinLine size={16} /> </span>
              {" "} Current Working City: {postss.currentWorkingCity ? postss.currentWorkingCity : "N/A"}</p>
          <p><span className="inline-block">
              {" "} <MapPinLine size={16} /> </span>
              {" "} Current Working District: {postss.currentWorkingDistrict ? postss.currentWorkingDistrict : "N/A"}</p>
          <p><span className="inline-block">
              {" "} <MapPinLine size={16} /> </span>
              {" "} Current Working Place: {postss.currentWorkingPlace ? postss.currentWorkingPlace : "N/A"}</p>
          <p><span className="inline-block">
              {" "} <Article size={16} /> </span>
              {" "} Description: {postss.description ? postss.description : "N/A"}</p>
          {console.log(postss.id)}
        </div>

            <div className="flex items-center mb-4 font-medium text-gray-500">
              <span className="inline-block">
                {" "}
                <Chats
                  className="text-deep-purple-accent-400"
                  size={34}
                />
              </span>
              Contact with {postss.username}{" "}
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