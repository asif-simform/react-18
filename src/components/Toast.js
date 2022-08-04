import React from "react";
import { successToast, errorToast, infoToast } from "../utils/toast";

import { ReactComponent as ErrorIcon } from "../assets/error-icon.svg";
import { ReactComponent as SuccessIcon } from "../assets/success.svg";
import { ReactComponent as InfoIcon } from "../assets/info.svg";

export const Toast = () => {
  return (
    <>
    <h1>Container One</h1>
      <div className="action-button">
        <button
          onClick={() =>
            successToast(
              "This is the toast notification text and it is arguably a bit longer than the first notification above.",
              {
                icon: <SuccessIcon />,
                containerId: "one",
              }
            )
          }
        >
          Success
        </button>

        <button
          onClick={() =>
            errorToast("This is the toast notification text and it is short", {
              icon: <ErrorIcon />,
              containerId: "one",
            })
          }
        >
          Error
        </button>

        <button
          onClick={() =>
            infoToast(
              "This is the notification text and it is only used for neutral and positive cases",
              {
                icon: <InfoIcon />,
                containerId: "one",
              }
            )
          }
        >
          Info
        </button>
      </div>
      
      <h1>Container Two</h1>

      <div className="action-button">
        <button
          onClick={() =>
            successToast(
              "This is the toast notification text and it is arguably a bit longer than the first notification above.",
              {
                icon: <SuccessIcon />,
                containerId: "two",
              }
            )
          }
        >
          Success
        </button>

        <button
          onClick={() =>
            errorToast("This is the toast notification text and it is short", {
              icon: <ErrorIcon />,
              containerId: "two",
            })
          }
        >
          Error
        </button>

        <button
          onClick={() =>
            infoToast(
              "This is the notification text and it is only used for neutral and positive cases",
              {
                icon: <InfoIcon />,
                containerId: "two",
              }
            )
          }
        >
          Info
        </button>
      </div>
    </>
  );
};

export default Toast;
