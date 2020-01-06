import React from "react";
import Login from "./auth/Login";
import SignUp from "./auth/SignUp";

const routes = [
  { name: "Sign Up", path: "/signup", exact: true, main: () => <SignUp /> },
  { name: "Login", path: "/login", exact: true, main: () => <Login /> }
];

export default routes;
