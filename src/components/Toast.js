import React from "react";
import { successToast, errorToast, infoToast } from "../utils/toast";

import errorIcon from "../assets/error-icon.svg";
import successIcon from "../assets/success.svg";
import { ReactComponent as InfoIcon } from "../assets/info.svg";

export const Toast = () => {
  return (
    <div className="action-button">

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

      <button
        onClick={() =>
          errorToast("This is the toast notification text and it is short", {
            icon: <img src={errorIcon} alt="errorIcon" />,
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
              icon: <InfoIcon />
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
