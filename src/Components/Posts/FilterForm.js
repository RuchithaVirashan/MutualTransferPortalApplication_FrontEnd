import React, { useState } from "react";

const FilterForm = ({ addFilterCriteria }) => {
  const initialState = { designation: "", currentWorkingCity: "", perferedCity: "" };
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("sending data for request: ", formData);
    addFilterCriteria(formData);
    setFormData(initialState);
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 pb-10 mx-auto">
        <form onSubmit={handleSubmit}>
        <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
            <div className="relative flex-grow w-full">
              <label
                htmlFor="title"
                className="leading-7 text-sm text-gray-600"
              >
                Designation
              </label>
              <input
                type="text"
                id="designation"
                name="designation"
                placeholder="designation"
                value={formData.designation}
                onChange={handleChange}
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-teal-accent-400 focus:bg-transparent focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              ></input>
            </div>
            <div className="relative flex-grow w-full">
              <label
                htmlFor="currentWorkingCity"
                className="leading-7 text-sm text-gray-600"
              >
                current Working City
              </label>
              <input
                type="text"
                id="currentWorkingCity"
                name="currentWorkingCity"
                placeholder="current City"
                value={formData.currentWorkingCity}
                onChange={handleChange}
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-teal-accent-400 focus:bg-transparent focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              ></input>
            </div>
            <div className="relative flex-grow w-full">
              <label
                htmlFor="perferedCity"
                className="leading-7 text-sm text-gray-600"
              >
                perfered City
              </label>
              <input
                type="text"
                id="perferedCity"
                name="perferedCity"
                placeholder="perfered City"
                value={formData.perferedCity}
                onChange={handleChange}
                className=" w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-teal-accent-400 focus:bg-transparent focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              ></input>
            </div>
          </div>
          <div className="flex justify-center pt-4">
            <button className="z-50 mx-auto h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none">
              Filter
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default FilterForm;