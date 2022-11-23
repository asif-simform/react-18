import React, { memo, useRef } from "react";
import * as yup from "yup";
import { useFormik } from "formik";

const isValidNumber = (text) => {
  const regexp = new RegExp(/^[0-9]*$/);
  return regexp.test(text);
};

const isDigit = (key) => {
  const numberArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  if (numberArr.includes(key)) {
    return true;
  }
  return false;
};

const defaultFormInitialValues = {
  routingNumber: "",
};

const ROUTING_NUMBER_MAX_LENGTH = 9;

const validationSchema = yup.object().shape({
  routingNumber: yup
    .string()
    .min(9, "Must be 9 digit")
    .max(9, "Must be 9 digit")
    .matches(/^[0-9]*$/, "Enter valid routing number")
    .required("RoutingNumber is required"),
});

const RoutingNumber = memo((props) => {
  const meta = useRef(false);
  const { initialValues } = props;

  const formik = useFormik({
    initialValues: {
      ...defaultFormInitialValues,
      ...initialValues,
    },
    validationSchema,
    enableReinitialize: true,
    isInitialValid: true,
    validateOnChange: true,
    onSubmit: () => {},
  });

  const { touched, errors, values, handleSubmit, handleBlur, setFieldValue } =
    formik;

  const handleKeyPress = (event) => {
    console.log("00000007 handleKeyPress", event.key);

    if (meta.current) {
      return true;
    }

    if (!isDigit(event.key)) {
      event.preventDefault();
      return false;
    }

    if (event.currentTarget.value.length <= 8) {
      return true;
    }
    event.preventDefault();
    return false;
  };

  const handleOnWheel = (e) => e.currentTarget.blur();

  const handleOnKeyDown = (event) => {
    console.log("00000007 handleOnKeyDown", event.key);

    if (["Meta", "Control"].includes(event.key)) {
      meta.current = true;
      event.preventDefault();
    }

    if (event.key === "ArrowUp" || event.key === "ArrowDown") {
      event.preventDefault();
    }
  };

  const handleOnKeyUp = (event) => {
    console.log("00000007 handleOnKeyUp", event.key);

    if (["Meta", "Control"].includes(event.key)) {
      meta.current = false;
      event.preventDefault();
    }
    if (event.key === "ArrowUp" || event.key === "ArrowDown") {
      event.preventDefault();
    }
  };

  const onHandleBlurRoutingNumber = (e) => {
    handleBlur(e);
    const value = e.target.value;
    if (value.length === 9) {
      console.log("Looks good");
    }
  };

  const handlePasteRoutingNumber = async (e) => {
    const value = e.clipboardData.getData("text");
    console.log(
      "00000007 handlePasteRoutingNumber",
      value,
      !isValidNumber(value)
    );
    // Prevent user from entering any character except digits
    if (!isValidNumber(value)) {
      e.preventDefault();
    }

    // Remove extra digits if user pastes large number
    // await setFieldValue('routingNumber', value.substring(0, ROUTING_NUMBER_MAX_LENGTH), true);
    // setFieldValue('bankLogo', '');
    // setInvalidRoutingNumberError('');
    // setValidatedRoutingNumber(false);
    // e.preventDefault();
  };

  const errorMessage = (touched?.routingNumber && errors?.routingNumber) || "";

  return (
    <form
      id="manual-bank-account-form"
      onSubmit={handleSubmit}
      className="manual-bank-account-form"
    >
      <input
        id="routingNumber"
        name="routingNumber"
        type="number"
        value={values?.routingNumber}
        onChange={async (e) => {
          console.log("00000007 onChange ****** ", e.target.value);
          // Remove extra digits if user pastes large number
          await setFieldValue(
            "routingNumber",
            e.target.value.substring(0, ROUTING_NUMBER_MAX_LENGTH),
            true
          );
        }}
        onBlur={onHandleBlurRoutingNumber}
        onKeyPress={handleKeyPress}
        onWheel={handleOnWheel}
        onKeyDown={handleOnKeyDown}
        onKeyUp={handleOnKeyUp}
        onPaste={handlePasteRoutingNumber}
      />
      {errorMessage && <p style={{color:'red', fontSize :'11px'}}>{errorMessage}</p>}
    </form>
  );
});

export default RoutingNumber;
