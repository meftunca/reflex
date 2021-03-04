import React from "react";

import { List, Button, Text, IconButton, Popper } from "@re-flex/ui";

const placement = [
  "top-start",
  "bottom-end",
  "bottom-start",
  "bottom",
  "left-end",
  "left-start",
  "left",
  "right-end",
  "right-start",
  "right",
  "top-end",
  "top",
  "auto",
  "auto-start",
  "auto-end",
];

export const MenuPage = () => {
  return (
    <div>
      {placement.map((i: any, k) => (
        <Popper
          placement={i}
          key={k}
          paperProps={{ p: [4, 0], bgColor: "white", color: "black" }}
          content={
            <List>
              {Array(2 + Math.floor((Math.random() * 999) % 6))
                .fill("")
                .map((i, k2) => (
                  <List.Item style={{ minWidth: 300 }} size={12} key={k2} button title={`Menu Item ${k2 + 1}`} />
                ))}
            </List>
          }
        >
          <Button>{i.replace("-", " ").toUpperCase()}</Button>
        </Popper>
      ))}{" "}
    </div>
  );
};

export default MenuPage;
