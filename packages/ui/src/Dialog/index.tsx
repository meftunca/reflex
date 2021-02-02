/** @jsx jsx */

import { css, jsx, useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import React, {
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react";
import Box, { BoxProps } from "../Box";
import Portal from "../Portal";
import Transition from "../Transition";
import Text from "../Typography";

const DialogBase = styled.div(
  `
    position: fixed;
    margin: auto;
    border: none;
    transition: all 0.2s ease-in-out;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    display: none;
    opacity: 0;
    &.default-dialog {
      left: 0px;
      right: 0px;
      top: 0;
      bottom: 0;
    }
    &.drawer {
    }
    &.drawer-left {
      top: 0;
      left: 0;
      bottom: 0;
    }
    &.drawer-right {
      top: 0;
      right: 0;
      bottom: 0;
    }
    &.drawer-top {
      left: 0;
      right: 0;
      top: 0;
    }
    &.drawer-bottom {
      left: 0;
      right: 0;
      bottom: 0;
    }
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
  `,
  ({ theme }) => ({
    "&.drawer": {
      [`.${theme.prefix}-transitions`]: {
        height: "100%",
        width: "100%",
      },
    },
  })
);

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

const dialogTransition = {
  in: {
    from: { top: 100, opacity: 0 },
    to: { top: 0, opacity: 1 },
  },
  out: {
    from: { top: 0, opacity: 1 },
    to: { top: 100, opacity: 0 },
  },
};
const drawerTransitionGenerator = (width: number, height: number) => ({
  left: {
    in: {
      from: { left: -width },
      to: { left: 0 },
    },
    out: {
      from: { left: 0 },
      to: { left: -width },
    },
  },
  right: {
    in: {
      from: { right: -width },
      to: { right: 0 },
    },
    out: {
      from: { right: 0 },
      to: { right: -width },
    },
  },
  top: {
    in: {
      from: { top: -height },
      to: { top: 0 },
    },
    out: {
      from: { top: 0 },
      to: { top: -height },
    },
  },
  bottom: {
    in: {
      from: { bottom: -height },
      to: { bottom: 0 },
    },
    out: {
      from: { bottom: 0 },
      to: { bottom: -height },
    },
  },
});

type DialogProps = {
  duration: number;
  radius: number;
  width: number;
  height: number;
  enableCloseIcon?: boolean;
  containerProps?: BoxProps;
  role: "dialog" | "drawer";
  drawerPosition: "left" | "right" | "top" | "bottom";
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
      role = "dialog",
      drawerPosition = "left",
      radius = 4,
      duration = 250,
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

    const open = useCallback(() => {
      setVisible(true);
    }, []);
    const close = useCallback(() => {
      setVisible(false);
    }, []);

    useImperativeHandle(ref, () => ({
      //@ts-ignore
      open,
      close,
    }));
    const drawerTransitions = useMemo(() => {
      return drawerTransitionGenerator(width, height);
    }, [width, height]);
    const onClose = useCallback(() => setVisible(null), []);
    return (
      <Portal enable={true}>
        <DialogBase
          role={role}
          ref={dialogRef}
          className={[
            theme.prefix + "-dialog",
            visible === null ? "" : "active",
            role === "dialog"
              ? "default-dialog"
              : `drawer drawer-${drawerPosition}`,
          ].join(" ")}
          css={css`
            z-index: 99999;
          `}
        >
          <section className="backdrop" onClick={close} />
          <Transition
            duration={duration}
            animation={
              role === "drawer"
                ? drawerTransitions[drawerPosition]
                : dialogTransition
            }
            // effect="Fade"
            // direction="Top"
            css={{ width, height }}
            onEndOut={onClose}
            in={visible}
          >
            <Box
              bgColor="paper"
              // width={width}
              radius={radius}
              height={
                role === "drawer" &&
                (drawerPosition === "left" || drawerPosition === "right")
                  ? "100%"
                  : height
              }
              width={
                role === "drawer" &&
                (drawerPosition === "top" || drawerPosition === "bottom")
                  ? "100%"
                  : width
              }
              css={{
                display: "flex",
                flexDirection: "column",
              }}
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
