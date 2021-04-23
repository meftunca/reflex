//@ts-nocheck
import React, { Fragment, useState } from "react";
import { List, Button, Text, IconButton, Popper } from "@re-flex/ui";
const Tooltip: React.FC = () => {
  return (
    <Fragment>
      <Text variant="h2">Tooltips</Text>
      <Popper placement="top-start" content="hi">
        <Button>Reference</Button>
      </Popper>
      <Popper
        placement="top-start"
        paperProps={{ p: 0, bgColor: "black", color: "white" }}
        content={
          <List>
            <List.Item
              button
              rippleProps={{ color: "rgba(0,0,0,.1)" }}
              title="Hello GUys"
            />
            <List.Item
              button
              rippleProps={{ color: "rgba(0,0,0,.1)" }}
              title="Hello GUys"
            />
            <List.Item
              rippleProps={{ color: "rgba(0,0,0,.1)" }}
              button
              title="Hello GUys"
            />
            <List.Item
              button
              rippleProps={{ color: "rgba(0,0,0,.1)" }}
              title="Hello GUys"
            />
          </List>
        }
      >
        <Button>Open Menu</Button>
      </Popper>
    </Fragment>
  );
};

export default Tooltip;
