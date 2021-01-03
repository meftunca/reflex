/** @jsx jsx */

import { css, jsx } from "@emotion/react";
import styled from "@emotion/styled";
import React, { useImperativeHandle, useRef, useState } from "react";
import Transition from "../Transition";
import Box, { BoxProps } from "../Box";
import { useTheme } from "@emotion/react";
import Portal from "../Portal";
import Text from "../Typography";

const DialogBase = styled.div(css`
  position: fixed;
  left: 0px;
  right: 0px;
  top: 0;
  bottom: 0;
  margin: auto;
  border: none;
  transition: all 0.2s ease-in-out;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  display: none;
  opacity: 0;
  &.active {
    opacity: 1;
    display: inline-flex;
  }
  & > .backdrop {
    position: fixed;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    background: rgba(0, 0, 0, 0.4);
  }
`);

/* 

@Usage
```jsx
export default () => {
  return (
    <div>
      <Text variant="h2">Dailogs</Text>
      <br />
      <br />
      <br />
      <DialogTest
        header={"Header 1"}
        footer={({ close }) => (
          <div
            css={css`
              display: flex;
              justify-content: flex-end;
            `}
          >
            <Button onClick={close}>Close</Button>
            <Button variant="contained" color="red">
              Save
            </Button>
          </div>
        )}
      >
        <DialogTest
          header={"Header 2"}
          content={`
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptatibus laudantium porro doloribus commodi sunt, ab incidunt
              unde explicabo quas hic dolores ratione assumenda repellat in
              beatae maiores rem eius doloremque.
            `}
        ></DialogTest>
      </DialogTest>
    </div>
  );
};
```
*/

type actionTypes = {
  open: (e: void) => void;
  close: (e: void) => void;
};

type DialogProps = {
  duration: number;
  radius: number;
  width: number;
  height: number;
  enableCloseIcon?: boolean;
  containerProps?: BoxProps;
  header?: (props: any) => React.ReactNode;
  headerProps?: BoxProps;
  content?: (props: any) => React.ReactNode;
  contentProps?: BoxProps;
  footer?: (props: actionTypes) => React.ReactNode;
  footerProps?: BoxProps;
};
const Dialog: React.FC<DialogProps> = React.forwardRef<
  React.HTMLProps<HTMLDivElement>,
  DialogProps
>(
  (
    {
      radius = 4,
      duration = 200,
      children,
      header,
      content,
      // enableCloseIcon = true,
      footer,
      width = 678,
      height,
      headerProps = {},
      containerProps = {},
      contentProps = {},
      footerProps = {},
    },
    ref
  ) => {
    const theme = useTheme();
    const [visible, setVisible] = useState<boolean | null>(null);
    const dialogRef = useRef<HTMLDivElement | null>(null);

    const open = () => {
      setVisible(true);
    };
    const close = () => {
      setVisible(false);
    };
    useImperativeHandle(ref, () => ({
      //@ts-ignore
      open,
      close,
    }));

    return (
      <Portal
        container={typeof document !== `undefined` ? document.body : undefined}
      >
        <DialogBase
          role="dialog"
          ref={dialogRef}
          className={[
            theme.prefix + "-dialog",
            visible === null ? "" : "active",
          ].join(" ")}
          css={css`
            z-index: 99999;
          `}
        >
          <section className="backdrop" onClick={close} />
          <Transition
            duration={duration}
            effect="Fade"
            direction="Top"
            onEndOut={() => setVisible(null)}
            in={visible}
          >
            <Box
              bgColor="paper"
              width={width}
              radius={radius}
              height={height}
              css={css`
                display: flex;
                flex-direction: column;
              `}
              {...containerProps}
            >
              <Box p={[16, 24]} mb={12} {...headerProps}>
                {typeof header === "string" ? (
                  <Text variant="h4" tag="h4">
                    {header}
                  </Text>
                ) : (
                  React.isValidElement(header) &&
                  header({
                    open,
                    close,
                  })
                )}
              </Box>
              {content && (
                <Box p={[16, 24]} mb={16} {...contentProps}>
                  {typeof content === "string" ? (
                    <Text variant="body1" tag="p">
                      {content}
                    </Text>
                  ) : (
                    content({
                      open,
                      close,
                    })
                  )}
                </Box>
              )}

              {children}
              <div style={{ flexGrow: 1 }} />
              {footer && (
                <Box p={[12, 16]} {...footerProps}>
                  {footer({
                    open,
                    close,
                  })}
                </Box>
              )}
            </Box>
          </Transition>
        </DialogBase>
      </Portal>
    );
  }
);
export default Dialog;
