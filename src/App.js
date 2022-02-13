import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Routes from "./Components/Routes";
import Footer from "./Components/Footer";
import Api from "./Api";
import { useEffect, useState } from "react";
import AuthContext from "./Components/Auth/authContext";

function App() {
  //looks for user in localStorage, if not found, user is empty obj
  const [currUser, setCurrUser] = useState(() => {
    const user = window.localStorage.getItem("currUser");
    return user !== null ? JSON.parse(user) : {};
  });
  const [token, setToken] = useState("");
  console.log(currUser);
  const [username, setUsername] = useState("");

  useEffect(() => {
        //set current token
        Api.token = token;

        //retrieve current user based on current token and username
        //save currUser to local storage
        const getUser = async () => {
          //window.localStorage.removeItem("currUser");
          const user = await Api.getUser(username);
          //console.log("User check", user);
          setCurrUser(user);
          console.log(currUser.username);
          window.localStorage.setItem("currUser", JSON.stringify(user));
    };
    getUser();
    return () => {};
  }, [token]);

  const register = async (formData) => {
    const res = await Api.register(formData);
    console.log(res);
    setToken(res);
  };

  const login = async (formData) => {
    //username needs to be exposed because the effect uses it to talk to backend
    setUsername(formData.username);
    const token = await Api.login(formData);
    //once token is changed, effect is triggered that sets currUser
    console.log(token);
    setToken(token);
  };

  const logout = () => {
    setCurrUser({});
    localStorage.removeItem("currUser");
  };

  return (
    <AuthContext.Provider
    value={{ register, login, logout, token, currUser, setCurrUser }}
    >
      <BrowserRouter>
        <Navbar />
        <Routes />
        <Footer />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
