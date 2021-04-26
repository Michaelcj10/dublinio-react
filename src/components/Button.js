import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

const ButtonStyle = styled.button`
  background-image: linear-gradient(
    to right,
    #70bafe 0,
    #998dff 51%,
    #70bafe 100%
  );
  color: #fff;
  border: none;
  height: 35px;
  font-family: sans-serif;
  font-size: 16px;
  font-weight: 600;
  border-radius: 4px;
  min-width: ${(props) => (props.fullWidthBtn ? "100%" : "100px")};
  cursor: ${(props) =>
    props.disabledBtn || props.loadingBtn ? "not-allowed" : "pointer"};
  opacity: ${(props) => (props.disabledBtn ? ".6" : "1")};
  border: 2px solid rgba(204, 241, 255, 0.5);
  transition: all 0.5s;
  &:hover {
    box-shadow: 0px 1px 1px -2px rgb(0 0 0 / 12%),
      0px 2px 2px 0px rgb(0 0 0 / 10%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
    opacity: ${(props) => (props.disabledBtn ? ".6" : ".9")};
  }
  &:focus,
  &:hover {
    outline: none;
  }

  &:active {
    opacity: 0.6;
  }
`;

export default function Button({
  type,
  text,
  onClick,
  fullWidth,
  disabled,
  loading,
}) {
  return (
    <ButtonStyle
      type={type}
      onClick={onClick}
      fullWidthBtn={fullWidth}
      disabledBtn={disabled || loading}
      loadingBtn={loading}
    >
      {text}
    </ButtonStyle>
  );
}

Button.propTypes = {
  fullWidth: PropTypes.bool,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  onClick: undefined,
};
