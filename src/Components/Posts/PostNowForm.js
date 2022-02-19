import React, { useState, useContext } from "react";
import Api from "../../Api";
import AuthContext from "../Auth/authContext";
import FormErrorHandler from "../FormComponents/FormErrorHandler";
import Spinner from "../FormComponents/Spinner";
import SuccessAlert from "../FormComponents/SuccessAlert";

const PostNowForm = () => {
  const { currUser } = useContext(AuthContext);
  const [submitting, setSubmitting] = useState(false);
  const [displaySuccess, setDisplaySuccess] = useState(false);
  const [formData, setFormData] = useState();
  const [errorMsgs, setErrorMsgs] = useState([]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const tryEdit = async () => {
      // console.log("TRYING");
      try {
        setErrorMsgs([]);
        await Api.addpost(formData);
        setSubmitting(true);
        setTimeout(() => {
          setSubmitting(false);
          setDisplaySuccess(true);
        }, 2000);

        setTimeout(() => {
          setDisplaySuccess(false);
        }, 5000);
      } catch (e) {
        console.log("CAUGHT ERROR", e);
        setErrorMsgs(e);
      }
    };
    tryEdit();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3 className="font-mono font-bold text-center mb-5 text-l">
        Add New Post
      </h3>

      <div className="mb-1 sm:mb-2">
        <label htmlFor="username" className="inline-block mb-1 font-medium">
          User Name
        </label>
        <input
          placeholder={currUser.username}
          required
          type="text"
          className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
          id="username"
          name="username"
          onChange={handleChange}
        />
      </div>

      <div className="mb-1 sm:mb-2">
        <label htmlFor="email" className="inline-block mb-1 font-medium">
          Email
        </label>
        <input
          placeholder={currUser.email}
          required
          type="text"
          className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
          id="email"
          name="email"
          onChange={handleChange}
        />
      </div>
      
      <div className="mb-1 sm:mb-2">
        <label htmlFor="designation" className="inline-block mb-1 font-medium">
          Designation
        </label>
        <input
          placeholder={currUser.designation}
          required
          type="text"
          className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
          id="designation"
          name="designation"
          onChange={handleChange}
        />
      </div>

      <div className="flex gap-4 mb-1 sm:mb-2">
        <div>
          <label htmlFor="phone" className="inline-block mb-1 font-medium">
            Phone
          </label>
          <input
            placeholder={currUser.phone}
            required
            type="text"
            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
            id="phone"
            name="phone"
            onChange={handleChange}
          />
        </div>
        <div>
          {" "}
          <label htmlFor="nic" className="inline-block mb-1 font-medium">
            NIC
          </label>
          <input
            placeholder=""
            required
            type="text"
            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
            id="nic"
            name="nic"
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="flex gap-4 mb-1 sm:mb-2">
      <p className="text-xs text-gray-600 sm:text-sm">
          Current Working
        </p>
        <div>
          <label htmlFor="currentWorkingCity" className="inline-block mb-1 font-medium">
            City
          </label>
          <input
            placeholder=""
            required
            type="text"
            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
            id="currentWorkingCity"
            name="currentWorkingCity"
            onChange={handleChange}
          />
        </div>
        <div>
          {" "}
          <label htmlFor="currentWorkingDistrict" className="inline-block mb-1 font-medium">
            District
          </label>
          <input
            placeholder=""
            required
            type="text"
            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
            id="currentWorkingDistrict"
            name="currentWorkingDistrict"
            onChange={handleChange}
          />
        </div>
        <div>
          {" "}
          <label htmlFor="currentWorkingPlace" className="inline-block mb-1 font-medium">
            Place
          </label>
          <input
            placeholder=""
            required
            type="text"
            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
            id="currentWorkingPlace"
            name="currentWorkingPlace"
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="flex gap-4 mb-1 sm:mb-2">
      <p className="text-xs text-gray-600 sm:text-sm">
          Prefered
        </p>
        <div>
          <label htmlFor="perferedCity" className="inline-block mb-1 font-medium">
            City
          </label>
          <input
            placeholder=""
            required
            type="text"
            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
            id="perferedCity"
            name="perferedCity"
            onChange={handleChange}
          />
        </div>
        <div>
          {" "}
          <label htmlFor="perferedDistrict" className="inline-block mb-1 font-medium">
            District
          </label>
          <input
            placeholder=""
            required
            type="text"
            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
            id="perferedDistrict"
            name="perferedDistrict"
            onChange={handleChange}
          />
        </div>
      </div>
    


      <div className="mb-1 sm:mb-2">
        <label htmlFor="description" className="inline-block mb-1 font-medium">
          Description
        </label>
        <input
          placeholder=""
          required
          type="description"
          className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
          id="description"
          name="description"
          onChange={handleChange}
        />
      </div>
      <div className="mt-4 mb-8 sm:mb-8">
      <FormErrorHandler errorMsgs={errorMsgs} />
        <button
          type="submit"
          className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
        >
          Post Now
        </button>
      </div>
      {submitting && <Spinner />}
      {displaySuccess && (
        <SuccessAlert msg="New post has been successfully added." />
      )}
    </form>
  );
};

export default PostNowForm;