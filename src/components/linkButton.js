import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

const ButtonStyle = styled.a`
  color: #998dff;
  font-size: 14px;
  font-weight: 900;
  transition: all 0.5s;
  font-weight: bold;
  opacity: 1;
  font-family: sans-serif;
  cursor: pointer;
  font-family: sans-serif;
  &:hover {
    opacity: 0.8;
    text-decoration: underline;
  }
  &:focus,
  &:hover {
    outline: none;
  }
`;

export default function LinkButton({ type, text, onClick }) {
  return (
    <ButtonStyle type={type} onClick={onClick}>
      {text}
    </ButtonStyle>
  );
}

LinkButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

LinkButton.defaultProps = {
  onClick: undefined,
};
