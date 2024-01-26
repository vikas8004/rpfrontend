import React, { useContext, useEffect } from "react";
import { tokenContext } from "../../context.jsx";
import { useNavigate } from "react-router-dom";
const ProtectedRoute = (props) => {
  const { Component } = props;
  const { token, setToken } = useContext(tokenContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate("/admin/login");
    }
  });
  return <>
  <Component/>
  </>;
};

export default ProtectedRoute;
