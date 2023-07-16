/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { Context } from "../main";
import { Server } from "../utils/urls/user";
import axios from "axios";
import { toast } from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  //* Submit Handler
  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        `${Server}/users/login`,
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      toast.success(data.message);
      // alert(data.message);
      setIsAuthenticated(true);
    } catch (error) {
      toast.error(error.response.data.message);
      setIsAuthenticated(false);
      // toast.error(error.message);
    }
  };

  if (isAuthenticated) return <Navigate to={"/"} />;

  return (
    <div className="login">
      <section>
        <form onSubmit={submitHandler}>
          <input
            type="email"
            // value={user.email}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your Email Please"
            name="email"
            required
          />
          <input
            type="password"
            // value={user.password}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Your Password Please"
            name="password"
            required
          />
          <button type="submit">Login Now</button>
          <h4>Or</h4>

          <Link to={"/register"}>
            {" "}
            <button>Sign Up </button>
          </Link>
        </form>
      </section>
    </div>
  );
};

export default Login;

// <-<Link to={"/register"}>Sing Up</Link>->
