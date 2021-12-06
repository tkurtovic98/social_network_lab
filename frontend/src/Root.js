import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import LoginSuccess from "./components/auth/LoginSuccess";

const Root = () => {
  return (
    <Router>
      <Routes>
        <Route path="/auth/google/success" element={<LoginSuccess />}></Route>
      </Routes>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </Router>
  );
};

export default Root;
