// eslint-disable-next-line no-unused-vars
import React from "react";
import * as car from "./App";
import { useContext } from "react";

const Demo = () => {
  const data = useContext(car.userContext);

  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${data} again!`}</h2>
    </>
  );
};

export default Demo;
