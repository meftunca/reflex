/** @jsx jsx */
import React from "react";

import { jsx, Collapse, List, Box } from "@re-flex/ui";
import { useCurrentDoc } from "docz";

import { NavLink } from "../NavLink";
import { ChevronDown } from "../Icons";

export const NavGroup = ({ item, ...rest }) => {
  const { name, menu } = item;
  const [subheadingsVisible, setShowsubheadings] = React.useState(
    window.location.pathname === name
  );
  const toggleSubheadings = () => setShowsubheadings(!subheadingsVisible);
  const menuList = React.useMemo(() => {
    return menu.map((menuItem, k) => {
      return (
        <NavLink
          key={k}
          active={window.location.pathname === menuItem.route}
          item={menuItem}
        >
          {menuItem.name}
        </NavLink>
      );
    });
  }, []);
  return (
    <>
      <List.Item
        button
        onClick={toggleSubheadings}
        title={item.name}
        rightItem={
          <ChevronDown
            css={{
              transform: `rotate(${subheadingsVisible ? 180 : 0}deg)`,
              transition: "all .2s ease",
            }}
          />
        }
      />

      <Collapse open={subheadingsVisible}>
        <div css={{ paddingLeft: 8 }}>{menuList}</div>
      </Collapse>
    </>
  );
};
