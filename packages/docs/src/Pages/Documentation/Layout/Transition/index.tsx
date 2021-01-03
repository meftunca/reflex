import * as React from "react";
import { Transition, Text, Box } from "@re-flex/ui";

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
          delay={1000}
        >
          <Box bgColor="red" width={200} height="200px"></Box>
        </Transition>
        <Transition delay={1000} effect="Slide" direction="Top" in={true}>
          <Box bgColor="orange" width={200} height="200px"></Box>
        </Transition>
      </div>
    </div>
  );
};

export default TransitionPage;
