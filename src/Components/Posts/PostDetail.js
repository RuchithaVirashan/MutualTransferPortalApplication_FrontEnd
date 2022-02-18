import React from "react";
import "./PostDetail.css";
import AuthContext from "../Auth/authContext";
import { Article, Envelope, IdentificationCard, MapPin, MapPinLine, Phone, Student, User } from "phosphor-react";

const PostDetail = ({ username, NIC, email, phone, designation, perferedCity, perferedDistrict, currentWorkingCity, currentWorkingDistrict, currentWorkingPlace, description  }) => {
  return (
    <div className="PostDetail mb-10 md:leading-loose p-10  md:rounded">
      <h2 className="mx-auto px-2 w-3/6 md:w-4/12 lg:w-2/12 py-2 bg-white rounded bg-opacity-50 text-black mb-5 text-center font-mono font-bold text-2xl">
        Post Details
      </h2>
      <div className="grid grid-cols-1 gap-10">
        <div className="text-sm md:w-8/12 lg:w-8/12 mx-auto flex flex-col justify-center bg-white rounded bg-opacity-50 p-5 rounded shadow-xl">
          {" "}
          <h3 className="opacity-100 mb-3">
            <span className="text-lg font-mono font-bold">{designation}</span>{" "}
          </h3>
          <p><span className="inline-block">
              {" "} <User size={16} /> </span> 
              {" "} Username: {username ? username : "N/A"}</p>
          <p><span className="inline-block">
              {" "} <IdentificationCard size={16} /> </span>
              {" "} NIC: {NIC ? NIC : "N/A"}</p>
          <p><span className="inline-block">
              {" "} <Envelope size={16} /> </span>
              {" "} Email: {email ? email : "N/A"}</p>
          <p><span className="inline-block">
              {" "} <Phone size={16} /> </span>
              {" "} Phone: {phone ? phone : "N/A"}</p>
          <p><span className="inline-block">
              {" "} <Student size={16} /> </span>
              {" "} Designation: {designation ? designation : "N/A"}</p>
          <p><span className="inline-block">
              {" "} <MapPin size={16} /> </span>
              {" "} Perfered City: {perferedCity ? perferedCity : "N/A"}</p>
          <p><span className="inline-block">
              {" "} <MapPin size={16} /> </span>
              {" "} Perfered District: {perferedDistrict ? perferedDistrict : "N/A"}</p>
          <p><span className="inline-block">
              {" "} <MapPinLine size={16} /> </span>
              {" "} Current Working City: {currentWorkingCity ? currentWorkingCity : "N/A"}</p>
          <p><span className="inline-block">
              {" "} <MapPinLine size={16} /> </span>
              {" "} Current Working District: {currentWorkingDistrict ? currentWorkingDistrict : "N/A"}</p>
          <p><span className="inline-block">
              {" "} <MapPinLine size={16} /> </span>
              {" "} Current Working Place: {currentWorkingPlace ? currentWorkingPlace : "N/A"}</p>
          <p><span className="inline-block">
              {" "} <Article size={16} /> </span>
              {" "} Description: {description ? description : "N/A"}</p>

        </div>
      </div>
    </div>
  );
};

export default PostDetail;