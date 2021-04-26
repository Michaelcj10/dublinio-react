import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

const BadgeStyle = styled.div`
  width: fit-content;
  height: 25px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #998dff;
  border-radius: 25px;
  color: #fff;
  font-size: 14px;
  font-family: sans-serif;
  font-weight: 700;
  cursor: ${(props) => (props.onClick ? "pointer" : "initial")};
  transition: all 0.5s;

  &:hover {
    opacity: 0.95; 
    padding: 0 12px;
  }
`;

export default function Badge({ text, onClick }) {
  return <BadgeStyle onClick={onClick}>{text}</BadgeStyle>;
}

Badge.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Badge.defaultProps = {
  onClick: undefined,
};
