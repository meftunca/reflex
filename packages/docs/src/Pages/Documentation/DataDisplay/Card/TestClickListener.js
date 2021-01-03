import React from "react";
import {
  Box,
  OutsideClickListener,
  Button,
  Card,
  Avatar,
  Text,
} from "@re-flex/ui";

export default () => {
  return (
    <OutsideClickListener
      onClickAway={() => {
        console.debug("Dışarıya Tıkladı");
      }}
    >
      <Card shadow={1}>
        <Card.Header>
          <Avatar label="User Name" />
          <Text variant="body2">User Name</Text>
        </Card.Header>
        <Card.Content>
          <Text variant="subtitle1">Deneme Yazısı</Text>
          <Text variant="body2">
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
          </Text>
        </Card.Content>
        <Card.Footer>
          <Button>Action</Button>
        </Card.Footer>
      </Card>
    </OutsideClickListener>
  );
};
