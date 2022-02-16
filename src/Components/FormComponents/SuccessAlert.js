import React from "react";

const SuccessAlert = ({ msg }) => {
  return (
    <div class="bg-gradient-to-r from-teal-300 to-green-600 alert shadow-xl flex flex-row items-center bg-green-300 p-3 rounded border-b-2 border-deep-purple-400">
      <div class="alert-icon flex items-center bg-deep-purple-400 border-2 border-gray-900 justify-center h-10 w-10 flex-shrink-0 rounded-full">
        <span class="text-black">
          <svg fill="currentColor" viewBox="0 0 20 20" class="h-6 w-6">
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </span>
      </div>
      <div class="alert-content ml-4">
        <div class="alert-title font-semibold text-md text-white">Success</div>
        <div class="alert-description text-sm text-white">{msg}</div>
      </div>
    </div>
  );
};

export default SuccessAlert;