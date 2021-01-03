import { Checkbox, Text } from "@re-flex/ui";
import * as React from "react";

const CheckboxPage = () => {
  return (
    <div>
      <Text size={36}>Hello World</Text>
      <br />
      <br />
      <br />
      {Array(10)
        .fill("")
        .map((i, k) => (
          <Checkbox key={k} size={16 + k * 8} />
        ))}
    </div>
  );
};

export default CheckboxPage;
