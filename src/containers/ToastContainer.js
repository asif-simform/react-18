import React from "react";
import { ToastContainer as Container } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const ToastContainer = () => {
  return <Container limit={1} closeButton={false}  className="my-app-toast-container"/>;
};

export default ToastContainer;
