import { css, useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
export type CollapseProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  open: boolean;
  starterHeight?: number;
};
const StyledCollapse = styled.div(
  ({
    theme: {
      transitions: { duration, easing },
    },
  }) => ({
    display: "block",
    willChange: "height",
    overflow: "hidden",
    transition: `height ${duration.shortest}ms ${easing.easeInOut} `,
    width: "100%",
  })
);
const Collapse: React.FC<CollapseProps> = ({
  children,
  open = false,
  starterHeight = 0,
  ...rest
}) => {
  const theme = useTheme();
  const collapseRef = React.useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = React.useState("0");
  React.useEffect(() => {
    const content = collapseRef.current;
    if (content !== null && open) {
      setMaxHeight(content.scrollHeight + "px");
    }
  }, [open]);
  return (
    <div>
      <StyledCollapse
        className={theme.prefix + "-collapse-content"}
        ref={collapseRef}
        css={css({ height: open ? maxHeight : starterHeight + "px" || "0" })}
        {...rest}
      >
        {children}
      </StyledCollapse>
    </div>
  );
};

export default Collapse;
