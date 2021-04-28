/** @jsx jsx */

import React from "react";
import styled from "@emotion/styled";
import { jsx, css } from "@emotion/react";
import { useTheme } from "@emotion/react";
import { darken, lighten } from "color2k";
import ProgressbarBase from "./ProgressbarBase";

const Progressbar = styled(ProgressbarBase)(
  ({ theme: { prefix, palette, transitions } }) => css`
      --progressbar-bgcolor: ${
        palette.type === "dark"
          ? darken(palette.primary.main, 0.7)
          : lighten(palette.primary.main, 0.9)
      };
      overflow: hidden;
      display: block;
      width: 100%;
      height: var(--progressbar-size);
      background-color: var(--progressbar-bgcolor);
      margin: 20px auto;
      transition: width var(--progressbar-duration)
        var(--progressbar-timing-function);

      .determinate {
        position: relative;
        max-width: 100%;
        height: 100%;
        transition: width var(--progressbar-duration)
          var(--progressbar-timing-function);
        background-color: var(--progressbar-color);
      }

      .indeterminate {
        position: relative;
        width: 100%;
        height: 100%;

        &:before {
          content: "";
          position: absolute;
          height: 100%;
          background-color: var(--progressbar-color);
          animation: ${prefix}-linear-progressbar-indeterminate-first
            calc(var(--progressbar-duration) + 400ms) infinite
            var(--progressbar-timing-function);
        }

        &:after {
          content: "";
          position: absolute;
          height: 100%;
          background-color: var(--progressbar-color);
          animation: ${prefix}-linear-progressbar-indeterminate-second
            calc(var(--progressbar-duration) + 400ms) infinite
            var(--progressbar-timing-function);
        }
      }

      @keyframes ${prefix}-linear-progressbar-indeterminate-first {
        0% {
          left: -100%;
          width: 100%;
        }

        100% {
          left: 100%;
          width: 10%;
        }
      }

      @keyframes ${prefix}-linear-progressbar-indeterminate-second {
        0% {
          left: -150%;
          width: 100%;
        }

        100% {
          left: 100%;
          width: 10%;
        }
      }
    }
    @keyframes ${prefix}-circular-progressbar-rotate {
      0% {
        transform-origin: "50% 50%";
      }
      100% {
        transform: rotate(360deg);
      }
    }
    @keyframes ${prefix}-circular-progressbar-dash {
      0% {
        stroke-dasharray: 1px, 200px;
        stroke-dashoffset: 0px;
      }
      50% {
        stroke-dasharray: 100px, 200px;
        stroke-dashoffset: -15px;
      }
      100% {
        stroke-dasharray: 100px, 200px;
        stroke-dashoffset: -125px;
      }
  `
);

type Props = {
  className?: string;
  thickness?: number;
  duration?: number;
  size?: number;
  indeterminate?: boolean;
  value?: number;
};

const LinearProgressbar: React.FC<Props> = ({
  className,
  children,
  indeterminate = false,
  value = 0,
  ...rest
}) => {
  const theme = useTheme();
  return (
    <Progressbar
      role="progressbar"
      className={[theme.prefix + "-progressbar linear", className]
        .filter(Boolean)
        .join(" ")}
      {...rest}
    >
      {indeterminate === false ? (
        <div className="determinate" style={{ width: `${value}%` }}></div>
      ) : (
        <div className="indeterminate"></div>
      )}
    </Progressbar>
  );
};

export default LinearProgressbar;
