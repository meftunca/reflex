/** @jsx jsx */
import { jsx, Text } from "@re-flex/ui";

const heading = (Tag) => {
  const Component = (props) => {
    return !!props.id ? (
      <a
        href={`#${props.id}`}
        css={{
          color: "inherit",
          textDecoration: "none",
          ":hover": {
            textDecoration: "underline",
          },
        }}
      >
        <Text {...props} gutter={[12, 0]} variant={Tag}>
          {props.children}
        </Text>
      </a>
    ) : (
      <Text {...props} variant={Tag} tag={Tag} />
    );
  };

  Component.displayName = Tag;
  return Component;
};

export const h1 = heading("h4");
export const h2 = heading("h5");
export const h3 = heading("h6");
export const h4 = heading("subtitle1");
export const h5 = heading("subtitle1");
export const h6 = heading("h5");
