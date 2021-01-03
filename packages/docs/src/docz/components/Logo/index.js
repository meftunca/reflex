/** @jsx jsx */
import { jsx, Box, Text } from "@re-flex/ui";

import * as styles from "./styles";

export const Logo = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      css={styles.logo}
      data-testid="logo"
      m={[0, 24]}
    >
      <Text variant="subtitle1" color="white" size={20}>
        Reflex
      </Text>
    </Box>
  );
};
