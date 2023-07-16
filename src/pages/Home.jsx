/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Server } from "../utils/urls/user";
import { toast } from "react-hot-toast";
import TodoItem from "../components/TodoItem";
import { Context } from "../main";
import { Navigate } from "react-router-dom";

const Home = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState("");
  const [tasks, setTasks] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const { isAuthenticated } = useContext(Context);

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const { data } = await axios.post(
        `${Server}/tasks/create`,
        {
          title,
          description,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      setTitle("");
      setDescription("");
      toast.success(data.message);
      setLoading(false);
      setRefresh((prev) => !prev);
    } catch (error) {
      toast.error(error.response.data.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    axios
      .get(`${Server}/tasks/read`, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data.data);
        setTasks(res.data.data);
      })

      .catch((e) => {
        toast.error(e.response.data.message);
      });
  }, [refresh]);

  const updateHandler = async (id) => {
    try {
      const { data } = await axios.put(
        `${Server}/tasks/${id}`,
        {},
        {
          withCredentials: true,
        }
      );

      toast.success(data.message);
      setRefresh((prev) => !prev);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  const deleteHandler = async (id) => {
    try {
      const { data } = await axios.delete(`${Server}/tasks/${id}`, {
        withCredentials: true,
      });

      toast.success(data.message);
      setRefresh((prev) => !prev);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  if (!isAuthenticated) return <Navigate to={"/login"} />;

  return (
    <div className="container">
      <div className="login">
        <section>
          <form onSubmit={submitHandler}>
            <input
              type="text"
              // value={user.email}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter Your Email Please"
              name="email"
              required
            />
            {/*  */}
            <input
              type="text"
              // value={user.email}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter Your Email Please"
              name="email"
              required
            />

            <button disabled={loading} type="submit">
              Add Task
            </button>
          </form>
        </section>
      </div>
      <section className="todosContainer">
        {tasks.map((i) => (
          <TodoItem
            key={i._id}
            title={i.title}
            description={i.description}
            isCompleted={i.isCompleted}
            updateHandler={updateHandler}
            deleteHandler={deleteHandler}
            id={i._id}
          />
        ))}
      </section>
    </div>
  );
};

export default Home;
