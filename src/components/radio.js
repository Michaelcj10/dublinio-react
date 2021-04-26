import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

const ButtonStyle = styled.div`
  width: 22px;
  height: 22px;
  margin-right: 8px;
  border-radius: 50%;
  transition: all 0.5s;
  background: ${(props) => (props.toggledOn ? "transparent" : "#ececec")};
  border: 2px solid ${(props) => (props.toggledOn ? "#70bafe" : "#d8d8d8")};
  opacity: ${(props) => (props.disabled ? ".6" : "1")};
`;
const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;

  > * {
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
    font-family: sans-serif;
    text-transform: lowercase;
  }
`;
const Toggle = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  position: absolute;
  left: 6px;
  transition: all 0.5s;
  background: ${(props) => (props.toggledOn ? "#70bafe" : "#d8d8d8")};
  opacity: ${(props) => (props.disabled ? ".6" : "1")};
`;

export default function RadioButton({ text, onClick, toggledOn, disabled }) {
  return (
    <Wrap
      disabled={disabled}
      onClick={() => {
        if (!disabled) {
          onClick();
        }
      }}
    >
      <ButtonStyle toggledOn={toggledOn} disabled={disabled} />
      <Toggle toggledOn={toggledOn} disabled={disabled} />
      <span>{text}</span>
    </Wrap>
  );
}

RadioButton.propTypes = {
  text: PropTypes.string.isRequired,
  toggledOn: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
};

RadioButton.defaultProps = {
  onClick: undefined,
  disabled: false,
};
