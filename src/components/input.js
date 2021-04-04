import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

const InputStyle = styled.input`
  height: 40px;
  padding: 0 10px;
  outline: none;
  border-bottom: 2px solid #998dff;
  background: ${(props) => (props.focused ? "white" : "whitesmoke")};
  font-size: 16px;
  border-top: none;
  border-left: none;
  border-right: none;
  transition: all 0.5s;
  width: 100%;
  color: #716f6f;
  border-color: ${(props) => (props.haserror ? "red" : "#998dff")};
  margin-top: ${(props) => (props.haslabel ? "5px" : "0px")};
  width: 90%;

  &:focus {
    border-color: ${(props) => (props.haserror ? "red" : "#007bff")};
    width: 100%;
  }

  ::placeholder {
    color: #b3b3b3;
  }

  cursor: ${(props) => (props.disabled ? "not-allowed" : "initial")};
  opacity: ${(props) => (props.disabled ? "0.4" : "1")};
`;
const Error = styled.span`
  color: #e23030;
  font-family: sans-serif;
  font-size: 12px;
  opacity: ${(props) => (props.disabled ? "0.4" : "1")};
`;
const Label = styled.span`
  color: ${(props) =>
    props.haserror ? "red" : props.focused ? "#007bff" : "#998dff"};
  font-family: sans-serif;
  font-size: 12px;
  transition: all 0.5s;
  margin-bottom: 5px;
  margin-left: 1px;
  opacity: ${(props) => (props.disabled ? "0.4" : "1")};
`;
export default function Input({
  text,
  placeholder,
  error,
  onChange,
  label,
  disabled,
}) {
  const [focused, setFocused] = useState(false);

  return (
    <Fragment>
      {label && (
        <Label disabled={disabled} focused={focused} haserror={error !== ""}>
          {label}
        </Label>
      )}
      <InputStyle
        onFocus={() => {
          setFocused(true);
        }}
        onBlur={() => {
          setFocused(false);
        }}
        haserror={error !== ""}
        placeholder={placeholder}
        defaultValue={text}
        onChange={onChange}
        focused={focused}
        disabled={disabled}
        haslabel={label && label !== ""}
      />
      {error && <Error disabled={disabled}>{error}</Error>}
    </Fragment>
  );
}

Input.propTypes = {
  text: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};

Input.defaultProps = {
  text: "something",
  error: "",
  disabled: false,
};
