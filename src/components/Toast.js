import React from "react";
import { successToast, errorToast, infoToast } from "../utils/toast";

import errorIcon from "../assets/error-icon.svg";
import successIcon from "../assets/success.svg";
import infoIcon from "../assets/info.svg";

export const Toast = () => {
  return (
    <div>
      <hr />

      <button
        onClick={() =>
          successToast(
            "This is the toast notification text and it is arguably a bit longer than the first notification above.",
            {
              icon: <img src={successIcon} alt="successIcon" />,
            }
          )
        }
      >
        Success
      </button>
      <hr />

      <button
        onClick={() =>
          errorToast("This is the toast notification text and it is short", {
            icon: <img src={errorIcon} alt="errorIcon" />,
          })
        }
      >
        Error
      </button>
      <hr />
      <button
        onClick={() =>
          infoToast(
            "This is the notification text and it is only used for neutral and positive cases",
            {
              icon: <img src={infoIcon} alt="infoIcon" />,
            }
          )
        }
      >
        Info
      </button>
    </div>
  );
};

export default Toast;
