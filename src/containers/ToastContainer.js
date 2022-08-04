import React from "react";
import { ToastContainer as Container } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const ToastContainer = () => {
  return (
    <>
      <Container
        limit={1}
        closeButton={false}
        containerId="one"
        className="my-app-toast-container"
        enableMultiContainer={true}
      />
      <Container
        limit={1}
        closeButton={false}
        containerId="two"
        className="my-app-toast-container"
        enableMultiContainer={true}
      />
    </>
  );
};

export default ToastContainer;
