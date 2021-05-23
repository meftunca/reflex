import styled from "@emotion/styled";

export type StyledRippleItemsProps = {};

const StyledRippleItems = styled.span<StyledRippleItemsProps>(
  ({
    theme: {
      prefix,
      transitions: { duration, easing },
    },
  }) => {
    const transitionTiming = `${duration.leavingScreen}ms ${easing.easeInOut}`;

    return `
    &.${prefix}-ripples {
        display: block;
        position: absolute;
        background-color: currentcolor;
        border-radius: 50%;
        pointer-events: none;
        animation: useRippleAnimation ${transitionTiming};
        will-change: transform, opacity;
        z-index: 1;
        opacity: 0.3;
      }


    `;
  }
);
export default StyledRippleItems;
