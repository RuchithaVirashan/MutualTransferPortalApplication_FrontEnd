import React, { useEffect, useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Api from '../../Api';
import DeleteButton from './DeleteButton';


const AdminPostCard = ({post}) => {   
  const history = useHistory(); 

  const handleClick = async () => {
    const id = post.postId;
    try {
    await Api.deletepost(id);
    console.log("wdaaaa");
    history.push('/adminhome');
    } catch (err) {
        console.log(`error: ${err.message}`);
    }
  }

  

  return (
    <div
    className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl"
    >
      <div className="p-5">
        <p className="mb-2 font-bold font-mono">{post.designation}</p>
        <p className="text-sm leading-5 text-gray-900 italic">
            username:{" "}
          <span className="font-normal not-italic">{post.username}</span>
        </p>
        <p className="text-sm leading-5 text-gray-900 italic">
            NIC:{" "}
          <span className="font-normal not-italic">{post.nic}</span>
        </p>
        <p className="text-sm leading-5 text-gray-900 italic">
            email:{" "}
          <span className="font-normal not-italic">{post.email}</span>
        </p>
        <p className="text-sm leading-5 text-gray-900 italic">
            phone:{" "}
          <span className="font-normal not-italic">{post.phone}</span>
        </p>
        <p className="text-sm leading-5 text-gray-900 italic">
            designation:{" "}
          <span className="font-normal not-italic">{post.designation}</span>
        </p>
        <p className="text-sm leading-5 text-gray-900 italic">
          perfered City:{" "}
          <span className="font-normal not-italic">{post.perferedCity}</span>
        </p>
        <p className="text-sm leading-5 text-gray-900 italic">
          perfered District:{" "}
          <span className="font-normal not-italic">{post.perferedDistrict}</span>
        </p>
        <p className="text-sm leading-5 text-gray-900 italic">
            current Working City:{" "}
          <span className="font-normal not-italic">{post.currentWorkingCity}</span>
        </p>
        <p className="text-sm leading-5 text-gray-900 italic">
            current Working District:{" "}
          <span className="font-normal not-italic">{post.currentWorkingDistrict}</span>
        </p>
        <p className="text-sm leading-5 text-gray-900 italic">
            current Working Place:{" "}
          <span className="font-normal not-italic">{post.currentWorkingPlace}</span>
        </p>
        <p className="text-sm leading-5 text-gray-900 italic">
            description:{" "}
          <span className="font-normal not-italic">{post.description}</span>
        </p>
        <div className="flex justify-center pt-4">
        <DeleteButton handleClick={handleClick}/>
        </div>
      </div>
      <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-red-accent-400 group-hover:scale-x-100" />
    </div>
  );
};

export default AdminPostCard;