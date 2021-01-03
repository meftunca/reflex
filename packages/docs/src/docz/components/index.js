import React from "react";
import Code from "./Code";
import * as headings from "./Headings";
import { Layout } from "./Layout";
import { Playground } from "./Playground";
import Pre from "./Pre";
import { Props } from "./Props";

export default {
  ...headings,
  wrapper: (props) => <main {...props} />,
  code: Code,
  Playground,
  pre: (props) => <div {...props} />,
  layout: Layout,
  Props: Props,
};
