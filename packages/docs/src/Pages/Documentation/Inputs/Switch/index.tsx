import { Switch, Text } from "@re-flex/ui";
import * as React from "react";

const SwitchPage = () => {
  return (
    <div>
      <Text size={36}>Hello World</Text>
      <br />
      <br />
      <br />
      {Array(10)
        .fill("")
        .map((i, k) => (
          <Switch
            key={k}
            size={10 + k * 8}
            height={16 + (k + 1) * 8}
            width={24 * 2 + k * 8}
          />
        ))}
    </div>
  );
};

export default SwitchPage;
