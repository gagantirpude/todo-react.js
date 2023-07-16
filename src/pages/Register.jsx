// eslint-disable-next-line no-unused-vars
import React, { createContext, useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { Server } from "../utils/urls/user";
import { Context } from "../main";
// import { userContext } from "../App";
// import { server } from "../main.jsx";

const Register = () => {
  //

  //* UseState to Store data
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isAuthenticated, setIsAuthenticated, loading, setLoading } =
    useContext(Context);

  //* Submit Handler
  const submitHandler = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      const { data } = await axios.post(
        `${Server}/users/register`,
        {
          name,
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
      setLoading(false);
    } catch (error) {
      toast.error(error.response.data.message);
      setIsAuthenticated(false);
      setLoading(false);
      // toast.error(error.message);
    }
  };

  if (isAuthenticated) return <Navigate to={"/"} />;

  return (
    <div className="login">
      <section>
        <form onSubmit={submitHandler}>
          <input
            type="name"
            // value={user.name}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Your Username Please"
            name="name"
            required
          />
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
          <button disabled={loading} type="submit">
            Sign Up
          </button>
          <h4>Or</h4>
          <Link to={"/login"}>
            {" "}
            <button>Login </button>
          </Link>
        </form>
      </section>
    </div>
  );
};

export default Register;

//  const stateData = () => {
// const [user, setUser] = useState({
//   name: "",
//   email: "",
//   password: "",
// });
// };

// alert(` ${name} ${email} ${password}`);
// `${server}/users/register`
// https: todo-api-new.onrender.com/api/v1/users/register
//
// const urlRegister = "https://todo-api-1.onrender.com/api/v1/users/register";
// import
// register
