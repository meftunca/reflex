//@ts-nocheck
import { Box, Text, Transition } from "@re-flex/ui";
import React from "react";

export default () => {
  return (
    <div>
      <Text variant="h2">Box</Text>
      <br />
      <Box bgColor="#f0f0f0" p={40} radius={6} />
      <Box bgColor="#ff99ff" p={40} radius={6} />
      <br />
      <Transition
        animation={{
          in: { from: { top: -340 }, to: { top: 0 } },
          out: { from: { top: 0 }, to: { top: -340 } },
        }}
      >
        <Box bgColor="#ff99ff" p={40} radius={6} />
      </Transition>
    </div>
  );
};
