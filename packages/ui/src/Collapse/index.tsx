import React from "react";
import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";
export type CollapseProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  open: boolean;
  starterHeight?: number;
};
type styledProps = { maxHeight: string };
const StyledCollapse = styled.div<styledProps>(
  {
    willChange: "max-height",
    overflow: "hidden",
    transition: "max-height 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
  },
  (props: any) => ({
    maxHeight: props.maxHeight,
  })
);
const Collapse: React.FC<CollapseProps> = ({
  children,
  open = false,
  // starterHeight=0,
  ...rest
}) => {
  const theme = useTheme();
  const collapseRef = React.useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = React.useState("0");
  React.useEffect(() => {
    const content = collapseRef.current;
    if (content === null) return;
    if (open === false) {
      setMaxHeight("0");
    } else {
      setMaxHeight(content.scrollHeight + "px");
    }
  }, [open, children]);
  return (
    <StyledCollapse
      className={theme.prefix + "-collapse-content"}
      ref={collapseRef}
      maxHeight={maxHeight}
      {...rest}
    >
      {children}
    </StyledCollapse>
  );
};

export default Collapse;
