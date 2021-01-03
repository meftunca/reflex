import { css } from "@emotion/react";
import styled from "@emotion/styled";

type Props = {
  strong?: number;
  spacing?: number | number[];
  color?: string;
  direction?: "horizontal" | "vertical";
};

const Divider = styled.div<Props>(
  ({ strong, spacing = 8, color = "#454545", direction = "horizontal" }) => css`
    display: flex;
    width: ${direction === "vertical" ? strong + "px" : "100%"};
    height: ${direction === "horizontal" ? strong + "px" : "100%"};
    background-color: ${color};
    margin: ${[spacing]
      .flat()
      .map((i) => i + "px")
      .join(" ")};
  `
);

export default Divider;
