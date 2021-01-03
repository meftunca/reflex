import * as React from "react";
import { Layout } from "./components/Layout";

const Wrapper = ({ children }) => {
  return <Layout>{children}</Layout>;
};
export default Wrapper;
