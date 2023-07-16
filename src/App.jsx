//import
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import "./styles/app.scss";
import Home from "./pages/Home";
import Header from "./components/Header";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import { Toaster } from "react-hot-toast";
import { useContext, useEffect } from "react";
import axios from "axios";
import { Context } from "./main";
import { Server } from "./utils/urls/user";
// import Demo from "./demo";

function App() {
  const { setUser, setIsAuthenticated, setLoading } = useContext(Context);
  useEffect(() => {
    setLoading(true);
    axios
      .get(`${Server}/users/profile`, {
        withCredentials: true,
      })
      .then((res) => {
        // console.log(res.data.data);
        setUser(res.data.data);
        setIsAuthenticated(true);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.response.data.message);
        setUser({}); //Null
        setIsAuthenticated(false);
        setLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
