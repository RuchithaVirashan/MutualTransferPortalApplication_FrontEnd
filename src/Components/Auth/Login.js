import React, { useState, useContext } from "react";
import AuthContext from "./authContext";
import AuthSVG from "./AuthSVG";
import { Link, Redirect, useHistory } from "react-router-dom";
import FormErrorHandler from "../FormComponents/FormErrorHandler";
import Spinner from "../FormComponents/Spinner";

const Login = () => {
  const initialState = {
    username: "ruchi",
    password: "password",
  };

  const [formData, setFormData] = useState(initialState);
  const { login, currUser } = useContext(AuthContext);
  const history = useHistory();
  const [errorMsgs, setErrorMsgs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSignupClick = (e) => {
    e.preventDefault();
    history.push("/signup");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const tryToLogin = async (formData) => {
      try {
        setIsLoading(true);
        setErrorMsgs([]);
        await login(formData);
        setFormData(initialState);
        setIsLoading(false);
        setTimeout(() => {
          history.push("/home");
        }, 1000);
      } catch (e) {
        setErrorMsgs(e);
      }
    };

    tryToLogin(formData);
  };

  return (
    <>
      {currUser.username ? <Redirect to="/" /> : null}
      <div className="relative">
        <img
          src="https://images.pexels.com/photos/443383/pexels-photo-443383.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
          className="absolute inset-0 object-cover w-full h-full"
          alt=""
        />
        <div className="relative bg-gray-900 bg-opacity-75">
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col items-center justify-between xl:flex-row">
              <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                  There is a perfect job <br className="hidden md:block" />
                  out there for{" "}
                  <span className="text-teal-accent-400">everyone</span>
                </h2>
                <p className="max-w-xl mb-4 text-base text-gray-400 md:text-lg">
                  Stop eating avocados and start searching for your dream role.
                  Last year, the economy only shrank by 20%, so what are you
                  still waiting for?
                </p>
                <a
                  href="/posts"
                  aria-label=""
                  className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-teal-accent-400 hover:text-teal-accent-700"
                >
                  View all companies
                  <svg
                    className="inline-block w-3 ml-2"
                    fill="currentColor"
                    viewBox="0 0 12 12"
                  >
                    <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                  </svg>
                </a>
              </div>
              <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                  <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                    Login to browse jobs
                  </h3>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-1 sm:mb-2">
                      <label
                        htmlFor="username"
                        className="inline-block mb-1 font-medium"
                      >
                        Username
                      </label>
                      <input
                        placeholder="AryaSt"
                        required
                        type="text"
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        id="username"
                        name="username"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-1 sm:mb-2">
                      <label
                        htmlFor="password"
                        className="inline-block mb-1 font-medium"
                      >
                        Password
                      </label>
                      <input
                        placeholder="********"
                        required
                        type="password"
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        id="password"
                        name="password"
                        onChange={handleChange}
                      />
                    </div>
                    <FormErrorHandler errorMsgs={errorMsgs} />
                    <div className="mt-4 mb-8 sm:mb-8">
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                      >
                        Login   {isLoading ? <Spinner /> : null}
                      </button>
                    </div>
                    <p className="text-xs text-gray-600 sm:text-sm">
                      No account yet? Sign up below.
                    </p>
                    <div className="mt-4 mb-2 sm:mb-4">
                      <button
                        onClick={handleSignupClick}
                        type="submit"
                        className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                      >
                        Sign up
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;