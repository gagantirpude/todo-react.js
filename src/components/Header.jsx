/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../main";
import axios from "axios";
import { toast } from "react-hot-toast";
import { Server } from "../utils/urls/user";

const Header = () => {
  //useContext
  const { isAuthenticated, setIsAuthenticated, loading, setLoading } =
    useContext(Context);
  console.log(isAuthenticated);

  //* Submit Handler
  const logoutHandler = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(`${Server}/users/logout`, {
        withCredentials: true,
      });
      toast.success(data.message);
      setIsAuthenticated(false);
      // alert(data.message);
      setLoading(false);
    } catch (error) {
      toast.error("error");
      // toast.error(error.response.data.message);
      setIsAuthenticated(true);
      setLoading(false);

      // toast.error(error.response.data.message);
    }
  };

  return (
    <nav className="header">
      <div>
        <h2>Todo App.</h2>
      </div>
      <article>
        <Link to={"/"}>Home</Link>
        <Link to={"/profile"}>Profile </Link>
        {isAuthenticated ? (
          <button disabled={loading} className="btn" onClick={logoutHandler}>
            Logout
          </button>
        ) : (
          <Link to={"/login"}>Login </Link>
        )}

        {/* <Link to={"/register"}>Register </Link> */}
      </article>
    </nav>
  );
};

export default Header;
