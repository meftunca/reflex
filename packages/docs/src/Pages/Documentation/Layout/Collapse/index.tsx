//@ts-nocheck
import { Box, Text, Button, Collapse } from "@re-flex/ui";
import { CollapseProps } from "@re-flex/ui/Effect/Collapse";
import React, { useState } from "react";

const CollapseSimple: React.FC<CollapseProps> = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Text variant="h2">Collapse</Text>
      <br />
      <Button onClick={() => setOpen(!open)}>Toggle Collapse</Button>
      <Collapse open={open}>
        <Box bgColor="#f0f0f0" p={40} radius={6} />
      </Collapse>
      <br />
      <br />
      <br />
      <Text variant="h2">Collapse</Text>
      <br />
      <BasicAccordion />
    </div>
  );
};

export default CollapseSimple;

const BasicAccordion = () => {
  const [open, setOpen] = useState(null);
  return (
    <div>
      {Array(10)
        .fill("")
        .map((i, k) => (
          <div key={k}>
            <Button onClick={() => setOpen(open === k ? null : k)}>
              Toggle Collapse Item {k}
            </Button>
            <Collapse open={open === k}>
              <Box bgColor="#f0f0f0" p={40} radius={6} />
            </Collapse>
          </div>
        ))}
    </div>
  );
};
