import styled from "@emotion/styled";
import React from "react";

export const Track = styled("div")`
  display: inline-block;
  height: 8px;
  width: 90%;
  margin: 0 5%;
`;

export const Tick = styled("div")`
  :before {
    content: "";
    position: absolute;
    left: 0;
    background: rgba(0, 0, 0, 0.2);
    height: 5px;
    width: 2px;
    transform: translate(-50%, 0.7rem);
  }
`;

export const TickLabel = styled("div")`
  position: absolute;
  font-size: 0.6rem;
  color: rgba(0, 0, 0, 0.5);
  top: 100%;
  transform: translate(-50%, 1.2rem);
  white-space: nowrap;
`;

export const Segment = styled("div")<{ index: number }>`
  background: ${(props) =>
    props.index === 0
      ? "#3e8aff"
      : props.index === 1
      ? "#00d5c0"
      : props.index === 2
      ? "#f5c200"
      : "#ff6050"};
  height: 100%;
`;

export const Handle = styled("div")<{ active: boolean }>`
  background: #ff1a6b;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.6rem;
  height: 1.6rem;
  border-radius: 100%;
  font-size: 0.7rem;
  white-space: nowrap;
  color: white;
  font-weight: ${(props) => (props.active ? "bold" : "normal")};
  transform: ${(props) =>
    props.active ? "translateY(-100%) scale(1.3)" : "translateY(0) scale(0.9)"};
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
`;

const Slider = () => {
  // const {} = useRand
  return <Track></Track>;
};

export default Slider;
