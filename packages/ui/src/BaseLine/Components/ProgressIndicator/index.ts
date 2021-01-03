import DefaultTheme from "../../../utils/theme/defaultTheme";
import { css } from "@emotion/react";
import { darken, lighten } from "color2k";

const CircularProgressbarStyled = ({
  prefix,
  palette,
  transitions,
}: typeof DefaultTheme) => css`
  .${prefix}-progressbar {
    --progressbar-color: ${palette.primary.main};
    --progressbar-size: 32px;
    --progressbar-duration: 250ms;
    --progressbar-bgcolor: transparent;
    --progressbar-timing-function: ${transitions.easing.sharp};
    --progressbar-stroke-size: calc(var(--progressbar-size) / 12);
    progress {
      display: none;
    }
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
    &.linear {
      --progressbar-bgcolor: ${palette.type === "dark"
        ? darken(palette.primary.main, 0.7)
        : lighten(palette.primary.main, 0.9)};
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
          animation: linear-progressbar-indeterminate-first
            calc(var(--progressbar-duration) + 400ms) infinite
            var(--progressbar-timing-function);
        }

        &:after {
          content: "";
          position: absolute;
          height: 100%;
          background-color: var(--progressbar-color);
          animation: linear-progressbar-indeterminate-second
            calc(var(--progressbar-duration) + 400ms) infinite
            var(--progressbar-timing-function);
        }
      }

      @keyframes linear-progressbar-indeterminate-first {
        0% {
          left: -100%;
          width: 100%;
        }

        100% {
          left: 100%;
          width: 10%;
        }
      }

      @keyframes linear-progressbar-indeterminate-second {
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
  }
`;

export default CircularProgressbarStyled;
