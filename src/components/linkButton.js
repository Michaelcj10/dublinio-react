import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

const ButtonStyle = styled.a`
  color: #998dff;
  font-size: 16px;
  font-weight: 900;
  transition: all 0.5s;
  font-weight: bold;
  opacity: 1;
  cursor: pointer;
  font-family: sans-serif;
  position: relative;

  &::after {
    border-top: 2px solid #998dff;
    content: "";
    position: absolute;
    right: 0;
    bottom: 0em;
    left: 0;
    width: 60%;
    transition: all 0.5s;
  }

  &:hover {
    text-decoration: underline;

    &::after {
      width: 100%;
    }
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
