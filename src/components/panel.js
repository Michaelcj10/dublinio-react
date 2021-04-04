import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-shadow: 0px 1px 3px 0px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 5%),
    0px 2px 1px -1px rgb(0 0 0 / 1%);
  min-height: 100px;
  padding: 15px;
  border-radius: 4px;
  max-width: 100%;
  cursor: ${(props) => (props.clickable ? "pointer" : "initial")};
  transition: all 0.5s;
  background: ${(props) => props.background};

  &:hover {
    box-shadow: 0px 1px 3px 0px rgb(0 0 0 / 20%),
      0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 2px 1px -1px rgb(0 0 0 / 12%);
  }

  > * {
    font-family: sans-serif;
  }
`;

export default function Panel({ content, onClick, background }) {
  return (
    <Wrap
      background={background}
      onClick={onClick}
      clickable={typeof onclick !== "undefined"}
    >
      {content && <div>{content}</div>}
    </Wrap>
  );
}

Panel.propTypes = {
  content: PropTypes.string,
  onClick: PropTypes.func,
};

Panel.defaultProps = {
  onClick: undefined,
  background: "#fff",
};
