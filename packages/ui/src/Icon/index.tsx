import { cx } from "@emotion/css";
import React, { useMemo } from "react";
import { useTheme, css } from "@emotion/react";
import sxPropGenerator from "../utils/theme/sx";

type IconProps = React.HTMLProps<HTMLElement> & {
  sx?: { [key: string]: any };
};

// @ts-ignore
const Icon: React.FC<IconProps> = ({
  children,
  className,
  sx = {},
  ...props
}) => {
  const theme = useTheme();
  const sxClass = useMemo(() => {
    return css(sxPropGenerator({ sx, theme }));
  }, [sx, theme]);
  return (
    <span className={cx(className, "material-icons")} css={sxClass} {...props}>
      {children}
    </span>
  );
};

export default Icon;
