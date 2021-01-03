/** @jsx jsx */
import React from "react";
import { Box, jsx } from "@re-flex/ui";
import { useState } from "react";
import { NavSearch } from "../NavSearch";
import { NavGroup } from "../NavGroup";
import { NavLink } from "../NavLink";
const menus = require("./routes.json");
export const Sidebar = ({ open = true }) => {
  const [query, setQuery] = useState("");
  // const menus = useMenus({ query });
  const handleChange = (ev) => {
    setQuery(ev.target.value);
  };
  return (
    <div
      css={{
        height: "calc(100vh - 77x)",
        maxHeight: "calc(100vh - 77px)",
        width: 250,
        marginLeft: open ? 0 : -250,
        overflow: "hidden ",
        transition: "all .2s cubic-bezier(0,.3,.6,1)",
      }}
    >
      <Box
        bgColor="paper"
        css={{
          borderRight: "1px solid rgba(0,0,0,.2)",
          minHeight: "calc(100vh - 67px)",
          height: "100%",
          marginLeft: open ? 0 : -250,
        }}
        p={[24, 4]}
      >
        <NavSearch
          placeholder="Type to search..."
          value={query}
          onChange={handleChange}
        />
        <div
          css={{ height: "99%", maxHeight: "100%", overflow: "hidden overlay" }}
        >
          {menus.map((menu, k) => {
            if (menu.hidden) return <div></div>;
            if (!menu.route && Array.isArray(menu.menu))
              return <NavGroup key={k} item={menu} />;
            // if (menu.route === currentDoc.route) {
            //   return (
            //     <NavLink key={menu.id} item={menu}>
            //       {menu.name}
            //     </NavLink>
            //   );
            // }

            return (
              <NavLink key={k} item={menu}>
                {menu.name}
              </NavLink>
            );
            return <div></div>;
          })}
        </div>
      </Box>
    </div>
  );
};
