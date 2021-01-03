/** @jsx jsx */

import React from "react";
import styled from "@emotion/styled";
import { jsx } from "@emotion/react";
import { useTheme } from "@emotion/react";
const Progressbar = styled.div((props: any) => {
  return {
    "--progressbar-size": (props.size || 4) + "px",
    "--progressbar-duration": (props.duration || 500) + "ms",
  };
});

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
