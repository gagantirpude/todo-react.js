/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Context } from "../main";
import Loader from "../components/Loader";

const Profile = () => {
  const { user, isAuthenticated, loading } = useContext(Context);
  // console.log(user);
  return loading ? (
    <Loader />
  ) : (
    <div className="profile">
      <h1>{user?.name}</h1>
      <h1>{user?.email}</h1>
    </div>
  );
};

export default Profile;
