// eslint-disable-next-line no-unused-vars
import React, { createContext, useState } from "react";
// import App from "../App";

const myContext = createContext();

const Context = () => {
  const { data, setData } = useState("");

  setData("Demo Data");
  return (
    <myContext.Provider value={data}>
      <h1>Hai, this is a context</h1>
    </myContext.Provider>
  );
};

export default Context;
