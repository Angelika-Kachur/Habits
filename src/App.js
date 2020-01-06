import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./auth/Login";
import SignUp from "./auth/SignUp";
import { AuthProvider } from "./auth/Auth";
import PrivateRoute from "./auth/PrivateRoute";
import Header from "./components/Header.js"

const App = () => {
  return (
    <AuthProvider>
      <Router>
      <Header />
        <PrivateRoute exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
      </Router>
    </AuthProvider>
  );
};

export default App;
