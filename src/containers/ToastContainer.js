import React from "react";
import { ToastContainer as Container } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./toast.scss";

const ToastContainer = () => {
  return (
    <div className="custom-toast">
      <Container
        limit={1}
        closeButton={false}
        containerId="one"
        className="my-app-toast-container"
        enableMultiContainer={true}
        autoClose={2000}
        pauseOnFocusLoss={false}
      />
      <Container
        limit={1}
        closeButton={false}
        containerId="two"
        className="my-app-toast-container"
        enableMultiContainer={true}
      />
    </div>
  );
};

export default ToastContainer;
