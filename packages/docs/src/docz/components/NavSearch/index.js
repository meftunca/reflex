/** @jsx jsx */
import { Box, jsx } from "@re-flex/ui";
import { Search } from "../Icons";
import * as styles from "./styles";

export const NavSearch = (props) => {
  return (
    <Box
      radius={6}
      bgColor="#99999933"
      display="flex"
      m={[8, 0, 16, 0]}
      p={[8, 12]}
      css={{ alignItems: "center" }}
      data-testid="nav-search"
    >
      <Search size={20} sx={styles.icon} css={{ marginRight: 12 }} />
      <input
        {...props}
        // sx={styles.input}
        css={{
          backgroundColor: "transparent",
          border: "none",
          outline: "none",
          height: "100%",
        }}
      />
    </Box>
  );
};
