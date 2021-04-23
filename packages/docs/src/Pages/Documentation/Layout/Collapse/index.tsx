//@ts-nocheck
import { Box, Text, Button, Collapse, List, Icon } from "@re-flex/ui";
import { CollapseProps } from "@re-flex/ui/src/Collapse";
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
  const [open, setOpen] = useState<null | number>(null);
  return (
    <div>
      {Array(10)
        .fill("")
        .map((i, k) => (
          <div key={k}>
            <List.Item
              button
              title={`Toggle Collapse Item {k}`}
              onClick={() => setOpen(open === k ? null : k)}
              rightItem={
                <Icon>{open !== k ? "expand_more" : "expand_less"}</Icon>
              }
            ></List.Item>
            <Collapse open={open === k}>
              <Box bgColor="#f0f0f0" p={40} radius={6} />
            </Collapse>
          </div>
        ))}
    </div>
  );
};
