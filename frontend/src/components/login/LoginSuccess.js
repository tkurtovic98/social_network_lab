import React, { useEffect } from "react";
import { useNavigate } from "react-router";


const LoginSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => navigate("/"), 1000);
  });

  return (
    <>
      <h2>Successful login</h2>
    </>
  );
};

export default LoginSuccess;
