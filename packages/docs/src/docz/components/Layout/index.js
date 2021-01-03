/** @jsx jsx */
import { useRef, useState, useLayoutEffect } from "react";
import { jsx, Box, Global } from "@re-flex/ui";

import { Header } from "../Header";
import { Sidebar } from "../Sidebar";
import { MainContainer } from "../MainContainer";
import * as styles from "./styles";

export const Layout = ({ children }) => {
  const [open, setOpen] = useState(
    typeof window !== "undefined"
      ? !!Boolean(localStorage.getItem("docs-driver-open"))
      : true
  );
  useLayoutEffect(() => {
    if (typeof window !== "undefined") {
      let isOpen = localStorage.getItem("docs-driver-open");
      setOpen(!!Boolean(isOpen));
    }
  }, []);

  return (
    <div
      css={{ "& > div": { flex: "1 1 auto", minHeight: "100vh" } }}
      data-testid="layout"
    >
      {/* <Global styles={global} /> */}
      <Box css={styles.main}>
        <Header
          onOpen={() => {
            if (typeof window !== "undefined") {
              localStorage.setItem("docs-driver-open", String(!open));
            }
            setOpen((s) => !s);
          }}
        />
        <Box css={styles.wrapper}>
          <Sidebar
            open={open}
            onFocus={() => setOpen(true)}
            onBlur={() => setOpen(false)}
            onClick={() => setOpen(false)}
          />
          <MainContainer
            open={open}
            data-testid="main-container"
            css={{ maxHeight: "calc(100vh - 67px)", overflowY: "scroll" }}
          >
            {children}
          </MainContainer>
        </Box>
      </Box>
    </div>
  );
};
