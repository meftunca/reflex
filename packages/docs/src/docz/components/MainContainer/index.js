/** @jsx jsx */
import { jsx, Box } from "@re-flex/ui";

import * as styles from "./styles";
import { PageInLink } from "../NavLink";

export const MainContainer = ({ open, children, ...rest }) => {
  return (
    <Box
      bgColor="background"
      p={[40, 30]}
      css={{
        ...styles.container,
        width: open ? `calc(100% - 250px)` : "100%",
        padding: `6% ${open ? 4 : 8}%`,
        overflow: "auto",
      }}
      {...rest}
    >
      <div
        css={{
          flex: 1,
          marginRight: 24,
          marginBottom: 200,
          height: "-webkit-fill-available",
        }}
      >
        {children}
      </div>
      {/* <PageInLink /> */}
    </Box>
  );
};
