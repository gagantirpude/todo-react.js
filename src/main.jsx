// import React from "react";
// import App from "./App.jsx";
// import ReactDOM from "react-dom/client";
// import "./styles/app.scss";
// import Demo from "./demo.jsx";
// import { createContext } from "react";

//! URL
// export const server = "https://my-node-todo-api-2xd9.onrender.com/api/v1";
// export const server = "https://my-testing-todo-api.onrender.com/api/v1";
// export const server = "https://my-node-todo-api-2xd9.onrender.com/api/v1";
// export const server = "https://node-todo-api-j8xl.onrender.com/api/v1";
// export const server = "https://my-node-todo-api-2xd9.onrender.com/api/v1";
// export const server = "https://todo-api-9ypv.onrender.com/api/v1";  //! Working
// export const server = "https://todo-api-new.onrender.com/api/v1";
// export const server = "https://todo-api-new.onrender.com/api/v1";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// Demo;
// const UserContext = createContext();

// export function Component1() {
//   const user = "Superman";

//   return (
//     <UserContext.Provider value={user}>
//       <App />
//     </UserContext.Provider>
//   );
// }

import React, { createContext, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// use Create Context
export const Context = createContext({ isAuthenticated: false });

// Create a function and wrap app component
const AppWrapper = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});
  return (
    <Context.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        loading,
        setLoading,
        user,
        setUser,
      }}
    >
      <App />
    </Context.Provider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);
