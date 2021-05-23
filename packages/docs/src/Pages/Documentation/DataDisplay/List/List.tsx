import React from "react";
import { List, Text, IconButton, Box, Button } from "@re-flex/ui";
import { image, fake } from "faker/locale/en";

interface Props {
  /** OnLongPress */
  onLongPress?: () => void;
  longPressDelay?: number;
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
  colorDepth?: "light" | "main" | "dark";
  leftItem?: React.ReactNode;
  rightItem?: React.ReactNode;
  fullWidth?: boolean;
  size?: number;
  button?: boolean;
  color?:
    | "primary"
    | "secondary"
    | "error"
    | "warning"
    | "info"
    | "success"
    | string;
  className?: string | string[];
}
const Users = Array(5)
  .fill("")
  .map((i, k) => ({
    leftItem: (
      <Box radius={30} p={0} overflow={"hidden"} width={30} height={30}>
        <img alt="" src={image.avatar()} />
      </Box>
    ),
    title: fake(`{{name.lastName}} {{name.firstName}}`),
    description: fake(`{{name.suffix}}`),
    key: k,
  }));

const SimpleList: React.FC<Props> = () => {
  return (
    <Box display="flex">
      <Box m={[12, 24]} shadow={1} radius={12}>
        <List>
          {Users.map((i: any) => (
            <List.Item button {...i} />
          ))}
        </List>
      </Box>
      <Box m={[12, 24]} shadow={1} radius={12}>
        <List>
          {Users.map((i: any) => (
            <List.Item
              button
              {...i}
              rightItem={<Button variant="outlined">Add</Button>}
            />
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default SimpleList;
