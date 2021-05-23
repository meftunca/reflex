import styled from "@emotion/styled";

export type StyledRippleProps = {};

const StyledRipple = styled.span<StyledRippleProps>(
  ({
    theme: {
      prefix,
      transitions: { duration, easing },
    },
  }) => {
    const transitionTiming = `${duration.leavingScreen + 150}ms ${
      easing.easeInOut
    }`;

    return `
      &.${prefix}-ripple-container {
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 0;
        overflow: hidden;
        position: absolute;
        border-radius: inherit;

        .${prefix}-ripples {
            display: block;
            position: absolute;
            background: currentcolor;
            border-radius: 50%;
            pointer-events: none;
            animation: useRippleAnimation ${transitionTiming};
            will-change: transform, opacity;
            z-index: 1;
            opacity: 0.3;
        }
      }
      @keyframes useRippleAnimation {
        0% {
          transform: scale(0);
          opacity: 0.3;
        }
        100% {
          transform: scale(1);
          opacity: 0;
        }
      }
    `;
  }
);
export default StyledRipple;
