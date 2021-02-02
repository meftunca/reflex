import { Box, Text, Transition } from "@re-flex/ui";
import * as React from "react";

const TransitionPage = () => {
  return (
    <div>
      <Text variant="h1">Transitions</Text>
      <br />
      <br />
      <br />
      <div style={{ display: "flex" }}>
        <Transition
          animation={{
            in: {
              from: { top: 50, opacity: 0 },
              to: { top: 0, opacity: 1 },
            },
            out: {
              from: { top: 0, opacity: 1 },
              to: { top: 50, opacity: 0 },
            },
          }}
          infinite
          in={true}
          delay={1000}
        >
          <Box bgColor="red" width={200} height="200px"></Box>
        </Transition>
        <Transition
          delay={1000}
          infinite
          in={true}
          effect="Slide"
          direction="Top"
        >
          <Box bgColor="orange" width={200} height="200px"></Box>
        </Transition>
      </div>
    </div>
  );
};

export default TransitionPage;
