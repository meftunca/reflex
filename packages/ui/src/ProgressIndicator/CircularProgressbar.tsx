/** @jsx jsx */

import React from "react";
import styled from "@emotion/styled";
import { jsx, css } from "@emotion/react";
import { useTheme } from "@emotion/react";
import { darken, lighten } from "color2k";
import ProgressbarBase from "./ProgressbarBase";

const Progressbar = styled(ProgressbarBase)(
  ({ theme: { prefix, palette, transitions } }) => css`
    &.circular {
      display: inline-block;
      &.indeterminate {
        animation: ${prefix}-circular-progressbar-rotate
          calc(var(--progressbar-duration) * 5.5) linear infinite;
      }

      svg {
        display: block;
        circle {
          color: var(--progressbar-color);
          &.determinate {
            transition: all var(--progressbar-duration)
              var(--progressbar-timing-function);
          }
          &.indeterminate {
            animation: ${prefix}-circular-progressbar-dash
              calc(var(--progressbar-duration) * 5.5) ease-in-out infinite;
            stroke-dasharray: 80px, 200px;
            stroke-dashoffset: 0px;
          }
        }
      }
    }
  `
);

type Props = {
  className?: string;
  thickness?: number;
  size?: number;
  indeterminate?: boolean;
  value?: number;
};
const SIZE = 44;

const CircularProgressbar: React.FC<Props> = ({
  className,
  children,
  size = 24,
  thickness = 3.6,
  indeterminate = false,
  value = 0,
  ...rest
}) => {
  const theme = useTheme();
  const circleClassName = indeterminate ? "indeterminate" : "determinate";
  const circleStyle: any = {};
  const rootStyle: any = {};
  const rootProps = {};
  if (indeterminate === false) {
    const circumference = 2 * Math.PI * ((SIZE - thickness) / 2);
    circleStyle.strokeDasharray = circumference.toFixed(3);
    rootProps["aria-valuenow"] = Math.round(value);
    circleStyle.strokeDashoffset = `${(
      ((100 - value) / 100) *
      circumference
    ).toFixed(3)}px`;
    rootStyle.transform = "rotate(-90deg)";
  }
  //const theme = useTheme();
  return (
    <Progressbar
      role="progressbar"
      className={[theme.prefix + "-progressbar circular", circleClassName]
        .filter(Boolean)
        .join(" ")}
    >
      {indeterminate === false && <progress {...rest} value={value} />}
      <svg
        viewBox={`${SIZE / 2} ${SIZE / 2} ${SIZE} ${SIZE}`}
        width={size}
        height={size}
      >
        <circle
          className={circleClassName}
          cx={SIZE}
          cy={SIZE}
          r={(SIZE - thickness) / 2}
          fill="none"
          style={circleStyle}
          strokeWidth={thickness}
          stroke-width="3.6"
          stroke="black"
        ></circle>
      </svg>
    </Progressbar>
  );
};

export default CircularProgressbar;
