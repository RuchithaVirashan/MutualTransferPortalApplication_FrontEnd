import React from 'react';
import {  useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const PostCard = ({post}) => {
  const history = useHistory();
  const handleClick = () => {
    history.push(`/posts/${post.postId}`);
  };

  return (
    <div
    onClick={handleClick}
    className="cursor-pointer flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl"
    >
      <div className="p-5">
        {/* <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
        </div> */}
        <p className="mb-2 font-bold font-mono">{post.designation}</p>
        <p className="mb-1 text-sm leading-5 text-gray-900 italic">
          current Working City:{" "}
          <span className="font-normal not-italic">{post.currentWorkingCity}</span>
        </p>
        <p className="text-sm leading-5 text-gray-900 italic">
          perfered City:{" "}
          <span className="font-normal not-italic">{post.perferedCity}</span>
        </p>
      </div>
      <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
    </div>
  );
};

export default PostCard;