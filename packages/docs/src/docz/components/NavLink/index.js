/** @jsx jsx */
import { jsx, List } from "@re-flex/ui";
import React from "react";
import { useHistory } from "react-router-dom";
const getCurrentHash = () => {
  if (typeof window === "undefined") {
    return "";
  }
  return window.location ? decodeURI(window.location.hash) : "";
};

export const NavLink = React.forwardRef(
  ({ item, active, children, ...props }, ref) => {
    const navigate = useHistory();
    const to = item.route;
    return (
      <List.Item
        button
        color={active ? "primary" : undefined}
        title={children}
        onClick={() => navigate.push(to?.toLowerCase())}
      />
    );
  }
);

export const PageInLink = React.forwardRef(
  ({ item, active, children, ...props }, ref) => {
    console.log("item", item);

    return <></>;
    const currentHash = getCurrentHash();
    const to = current.route;
    return (
      <div css={{ position: "sticky", top: 0, flex: "0 0 200px", width: 200 }}>
        {Array.isArray(current.headings) &&
          current.headings.map((heading) => (
            <List.Item
              size={4 + 1 / heading.depth}
              button
              key={heading.slug}
              onClick={() => history.push(`${to}#${heading.slug}`)}
              color={currentHash === `#${heading.slug}` ? "primary" : undefined}
              css={{
                transition: "all .2s ease-in-out",
                paddingRight: `calc(12px + ${heading.depth / 8}rem)`,
                borderRight:
                  "2px solid" +
                  (currentHash === `#${heading.slug}`
                    ? "#3f51b5"
                    : "#f9f9f901"),
                "&>div>span": {
                  textAlign: "right",
                  fontSize: 10 + (1 / heading.depth) * 6,
                },
              }}
              title={heading.value}
            />
          ))}
      </div>
    );
  }
);
