import React, { useState } from "react";
import styled from "styled-components";

const Wrap = styled.div`
  display: flex;
`;

const Date = styled.div`
  &:not(:first-child) {
    margin-top: 10px;
  }
  filter: ${(props) => (props.selected ? "none" : "blur(1px)")};
  font-weight: ${(props) => (props.selected ? "bold" : "normal")};
  color: ${(props) => (props.selected ? "#fff" : "#201e1e")};
  transition: all 0.5s;
  background: ${(props) => (props.selected ? "#86868b" : "transparent")};
  border-radius: ${(props) => (props.selected ? "25px" : "0px")};
  padding: ${(props) => (props.selected ? "0 10px" : "0")};
  font-size: 16px;
  cursor: pointer;
`;
const DateWrap = styled.div`
  margin-top: 70px;
  max-height: 250px;
  overflow: hidden;
`;
const TogglerStyle = styled.div`
  position: relative;
  width: 70px;
`;
const Line = styled.div`
  background: #efefef;
  height: 250px;
  max-height: 250px;
  width: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
`;
const CircleToggle = styled.button`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  cursor: pointer;
  background: #efefef;
  opacity: 0.7;
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px,
    rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px;
  transition: all 0.5s;
  border: none;

  &&:hover {
    opacity: 1;
  }
`;

const Arrow = styled.div`
  border: solid #6a6a70;
  opacity: 0.6;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(-135deg);
`;

const ArrowDown = styled(Arrow)`
  transform: rotate(45deg);
`;

export default function Toggler({ onDateChanged }) {
  const dateRange = [
    1800, 1810, 1820, 1830, 1840, 1850, 1860, 1870, 1880, 1890, 1900, 1910,
    1920, 1930, 1940, 1950, 1960, 1970, 1980, 1990, 2000,
  ];
  const [startingPoint, setStartingPoint] = useState(1900);
  const newArr = dateRange.filter((x) => x >= startingPoint);
  const [selected, setSelected] = useState(1940);

  const handleClickBack = () => {
    if (selected === dateRange[0]) {
      return;
    }
    setSelected(selected - 10);
    setStartingPoint(startingPoint - 10);
    onDateChanged(selected - 10);
  };
  const handleClickUp = () => {
    if (selected === dateRange[dateRange.length - 1]) {
      return;
    }
    setSelected(selected + 10);
    setStartingPoint(startingPoint + 10);
    onDateChanged(selected + 10);
  };

  const onSpecificDateClicked = (date) => {
    setSelected(date + 10);
    setStartingPoint(date - 40);
    onDateChanged(date + 10);
  };
  return (
    <Wrap>
      <TogglerStyle>
        <CircleToggle onClick={handleClickBack}>
          <Arrow />
        </CircleToggle>
        <Line />
        <CircleToggle onClick={handleClickUp}>
          <ArrowDown />
        </CircleToggle>
      </TogglerStyle>

      <DateWrap>
        {newArr.map((date) => {
          return (
            <Date
              onClick={() => {
                onSpecificDateClicked(date - 10);
              }}
              selected={date === selected}
              key={date}
            >
              {`${date}'s`}
            </Date>
          );
        })}
      </DateWrap>
    </Wrap>
  );
}
