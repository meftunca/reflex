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
        {/* <Transition
          defaultStyle={{}}
          from={{}}
          to={{}}
          in={true}
          delay={1000}
        >
          <Box bgColor="red" width={200} height="200px"></Box>
        </Transition>
        <Transition
          delay={1000}
          in={true}
          effect="Slide"
          direction="Top"
          defaultStyle={{}}
          from={{}}
          to={{}}
        >
          <Box bgColor="orange" width={200} height="200px">
            <span>Test</span>
          </Box>
        </Transition> */}
      </div>
    </div>
  );
};

export default TransitionPage;
