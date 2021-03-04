
import styled from "@emotion/styled";
import React from "react";
import { useRef } from "react";
import { useRanger } from "../../utils/hooks/useRanger";

export const Track = styled("div")<SliderProps>((props) => ({
  display: "flex",
  height: props.height || "8px",
  width: props.width || "100%",
  position: "relative",
  overflow: "visible",
  borderRadius:typeof props.radius === "number" ? props.radius+"px" : props.radius
}));

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

export const Segment = styled("div")<{ backgroundColor: string }>`
         background-color: ${(props) => props.backgroundColor};
         height: 100%;
       `;

export const Handle = styled("div")<{
                active: boolean;
                size: number;
  activeSize: number;
                color?:string
              }>`
                background-color: ${props=>props.color||props.theme.palette.primary.main};
                display: flex;
                align-items: center;
                justify-content: center;
                width: ${(props) => (props.active ? props.activeSize : props.size)}px;
                height: ${(props) => (props.active ? props.activeSize : props.size)}px;
                border-radius: 100%;
                font-size: ${(props) =>
                  props.active ? (props.activeSize / 3) * 2 : (props.size / 3) * 2}px;
                white-space: nowrap;
                color: white;
                font-weight: ${(props) => (props.active ? "bold" : "normal")};
                transform: ${(props) =>
                  props.active
         
                ? "translateY(-100%) scale(1.3)"
      
                   : "translateY(0) scale(0.9)"};
                transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
              `;

type SliderProps = {
  disabled?: boolean,
  color?:string,
  size?: number,
  activeSize?:number,
  width?: number,
  height?:number,
  step?: number,
  min?: number,
  max?: number,
  radius?: number|string,
  values?: number[],
  segmentColors?:string[]
}


const defaultSegmentColors = [
 "#3e8aff",
 "#00d5c0",
 "#f5c200",
 "#ff6050",
]

const Slider: React.FC<SliderProps> = ({
  width,
  height,
  size = 16,
  activeSize = 24,
  step = 0.1,
  min = 0,
  max = 10,
  values = [2, 5],
  radius="6%",
  segmentColors= defaultSegmentColors,
}) => {
  const sliderRef = useRef(null);
  const { getTrackProps, ticks, segments, handles } = useRanger({
    trackElRef: sliderRef,
    min,
    stepSize: step,
    max,
    values,
    onChange: console.log,
  });
  return (
    <Track width={width} height={height} radius={radius} ref={sliderRef}>
      {ticks.map(({ value, getTickProps }: any) => (
        <Tick {...getTickProps()}>
          <TickLabel>{value}</TickLabel>
        </Tick>
      ))}
      {segments.map(({ getSegmentProps }, i) => (
        //@ts-ignore
        <Segment {...getSegmentProps()} backgroundColor={segmentColors[i]} />
      ))}
      {handles.map(({ value, active, getHandleProps }: any) => (
        <div {...getHandleProps()}>
          <Handle size={size} activeSize={activeSize} active={active}>
            {Number(value).toFixed(0)}
          </Handle>
        </div>
      ))}
    </Track>
  );
};

export default Slider;
