import * as React from "react";
import {
  Text,
  CircularProgressbar,
  LinearProgressbar,
  Button,
  Box,
} from "@re-flex/ui";

export const CircularProgressbarPage = () => {
  const [value, setValue] = React.useState(
    Math.floor((40 + Math.random() * 9999) % 100)
  );

  return (
    <Box shadow={2} p={24} m={24}>
      <Text size={36}>CircularProgressbar </Text>
      <br />
      <br />
      <CircularProgressbar value={value}></CircularProgressbar>
      <br />
      <CircularProgressbar indeterminate></CircularProgressbar>

      <Button
        onClick={() =>
          setValue(Math.floor((value + Math.random() * 9999) % 100))
        }
      >
        Random set [{value}]
      </Button>
    </Box>
  );
};

export const LinearProgressbarPage = () => {
  const [value, setValue] = React.useState(
    Math.floor((40 + Math.random() * 9999) % 100)
  );

  return (
    <Box shadow={2} p={24} m={24}>
      <Text size={36}>CircularProgressbar </Text>
      <br />
      <br />
      <LinearProgressbar value={value}></LinearProgressbar>
      <br />
      <LinearProgressbar indeterminate></LinearProgressbar>

      <Button
        onClick={() =>
          setValue(Math.floor((value + Math.random() * 9999) % 100))
        }
      >
        Random set [{value}]
      </Button>
    </Box>
  );
};

export default () => {
  return (
    <>
      <CircularProgressbarPage />
      <LinearProgressbarPage />
    </>
  );
};
