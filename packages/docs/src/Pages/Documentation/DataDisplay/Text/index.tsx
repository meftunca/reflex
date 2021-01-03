import React from "react";
import { Text } from "@re-flex/ui";
const TextSample = () => {
  return (
    <div>
      <Text>Typography</Text>
      <br />

      {typographyTest()}
    </div>
  );
};

const typographyTest = () =>
  typoghyTypes.map(([variant, tag]: any[], k) => (
    <Text
      key={variant}
      variant={variant}
      tag={tag}
      color={colors[k % colors.length]}
      gutter={8}
    >
      Variant = {variant} / Tag = {tag}
    </Text>
  ));
const typoghyTypes = [
  ["h1", "h1"],
  ["h2", "h2"],
  ["h3", "h3"],
  ["h4", "h4"],
  ["h5", "h5"],
  ["h6", "h6"],
  ["subtitle1", "h4"],
  ["subtitle2", "h4"],
  ["body1", "p"],
  ["body2", "p"],
  ["button", "span"],
  ["caption", "span"],
  ["overline", "span"],
];
const colors = ["primary", "secondary", "error", "warning", "info", "success"];

export default TextSample;
