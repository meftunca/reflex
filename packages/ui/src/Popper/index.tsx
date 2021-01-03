//@ts-nocheck
import React, { useCallback, useLayoutEffect, useState } from "react";
// import { usePopper } from "react-popper";
import styled from "@emotion/styled";
import Box, { BoxProps } from "../Box";
import Transition from "../Transition";
import {
  createPopper,
  VirtualElement,
} from "@popperjs/core/lib/popper-lite.js";

// import { useTheme } from "../../utils/theme/theming";
import Text from "../Typography";
import Portal from "../Portal";
import { css } from "@emotion/react";
import { useMemo } from "react";

const usePopper = (
  reference: React.ReactNode | Element | VirtualElement,
  popperElement: React.ReactNode | HTMLElement,
  options: { [key: string]: any }
) => {
  const [state, setState] = useState<{ [key: string]: any }>({
    styles: {},
    attributes: {},
  });
  useLayoutEffect(() => {
    if (reference && popperElement) {
      //@ts-ignore
      const rest = createPopper(reference, popperElement, options);
      console.log("rest", rest);
      setState((prev) => ({ ...prev, ...rest.state }));
    }
  }, [reference, popperElement]);

  return state;
};

const StyledPopper = styled(Box)(css``, () => {
  const styles = {};
  // if (props.bgColor)
  //   styles["--typography-color"] = Color(props.bgColor).isDark()
  //     ? "white"
  //     : "inherit";
  return styles;
});

const Popper: React.FC<Props> = ({
  children,
  placement = "top",
  content,
  paperProps = {},
  onClickAway,
}) => {
  // const theme = useTheme();
  const isText = typeof content === "string";
  const [visible, setVisible] = React.useState<boolean | null>(null);
  const referenceElement = React.useRef(null);
  const popperElement = React.useRef<HTMLDivElement | null>(null);
  const { styles, attributes } = usePopper(
    referenceElement.current,
    popperElement.current,
    {
      placement: placement,
      // modifiers: [
      //   {
      //     name: "offset",
      //     options: {
      //       offset: [0, 8],
      //     },
      //   },
      // ],
    }
  );
  const getRef = useMemo(() => {
    const childElement = React.Children.only(children);

    return React.isValidElement(childElement)
      ? React.cloneElement(childElement, {
          ref: referenceElement,
          onClick: () => setVisible(!visible),
        })
      : null;
  }, []);
  const handleEvents = useCallback((event: MouseEvent | TouchEvent): void => {
    if (visible !== true) return;
    if (
      popperElement.current &&
      !popperElement.current.contains(event.target as Node)
    ) {
      if (onClickAway) onClickAway(event);
      setVisible(false);
    }
  }, []);

  React.useEffect(() => {
    document.addEventListener("click", handleEvents);
    document.addEventListener("touchmove", handleEvents);
    return () => {
      document.removeEventListener("click", handleEvents);
      document.removeEventListener("touchmove", handleEvents);
    };
  }, []);
  return (
    <>
      {getRef}
      <Portal>
        <div ref={popperElement} style={styles.popper} {...attributes.popper}>
          <Transition
            animation={{
              in: {
                from: { top: 50, opacity: 0 },
                to: { top: 0, opacity: 1 },
              },
              out: {
                from: { top: 0, opacity: 1 },
                to: { top: 50, opacity: 0 },
              },
            }}
            in={visible}
            onEndOut={() => setVisible(null)}
          >
            <StyledPopper
              bgColor={"paper"}
              p={[5, 12]}
              color="white"
              shadow={2}
              radius={6}
              css={{
                minWidth: 60,
                textAlign: isText ? "center" : "left",
              }}
              {...paperProps}
            >
              {isText ? (
                <Text
                  tag="span"
                  variant="caption"
                  color={isText ? "white" : "inherit"}
                  align="center"
                >
                  {content}
                </Text>
              ) : (
                content
              )}
            </StyledPopper>
          </Transition>
        </div>
      </Portal>
    </>
  );
};

export default Popper;
type Props = {
  // container: HTMLElement;
  /**
   * The `children` will be inside the DOM hierarchy of the parent component.
   */
  disablePortal?: boolean;
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Popper.
   */
  keepMounted?: boolean;
  /**
   * Popper.js is based on a "plugin-like" architecture,
   * most of its features are fully encapsulated "modifiers".
   *
   * A modifier is a function that is called each time Popper.js needs to
   * compute the position of the popper.
   * For this reason, modifiers should be very performant to avoid bottlenecks.
   * To learn how to create a modifier, [read the modifiers documentation](https://popper.js.org/docs/v1/#modifiers).
   */
  modifiers?: object;
  /**
   * If `true`, the popper is visible.
   */
  open?: boolean;
  /**
   * Popper placement.
   */
  placement?:
    | "bottom-end"
    | "bottom-start"
    | "bottom"
    | "left-end"
    | "left-start"
    | "left"
    | "right-end"
    | "right-start"
    | "right"
    | "top-end"
    | "top-start"
    | "top"
    | "auto"
    | "auto-start"
    | "auto-end"
    | undefined;
  /**
   * Options provided to the [`popper.js`](https://popper.js.org/docs/v1/) instance.
   */
  popperOptions?: object;
  /**
   * A ref that points to the used popper instance.
   */
  popperRef?: React.Ref<any>;
  /**
   * @ignore
   */
  style?: object;
  /**
   * Help supporting a react-transition-group/Transition component.
   */
  transition?: boolean;
  /**
   * Help supporting a Box component.
   */
  paperProps?: BoxProps;

  /**
   * Content Node/String
   */
  content?: React.ReactNode | string;

  /**
   * OnClick Away
   */

  onClickAway?: (event: MouseEvent | TouchEvent) => void;
};
