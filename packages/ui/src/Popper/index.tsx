/* @jsx jsx */
import { jsx } from "@emotion/react";
// import { usePopper } from "react-popper";
import styled from "@emotion/styled";
import flip from "@popperjs/core/lib/modifiers/flip";
import preventOverflow from "@popperjs/core/lib/modifiers/preventOverflow";
import {
  createPopper,
  VirtualElement,
} from "@popperjs/core/lib/popper-lite.js";
import React, {
  Fragment,
  useCallback,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";
import { useImperativeHandle } from "react";
import Box, { BoxProps } from "../Box";
import Portal from "../Portal";
import Transition from "../Transition";
// import { useTheme } from "../../utils/theme/theming";
import Text from "../Typography";

const usePopper = (
  reference: null | Element | VirtualElement,
  popperElement: null | HTMLElement,
  options: { [key: string]: any }
) => {
  const [state, setState] = useState<{ [key: string]: any }>({
    styles: {},
    attributes: {},
  });
  useLayoutEffect(() => {
    if (reference && popperElement) {
      const rest = createPopper(reference, popperElement, options);
      setState((prev) => ({ ...prev, ...rest.state }));
    }
  }, [reference, popperElement]);

  return state;
};

const StyledPopper = styled(Box)(({ theme }) => {
  const styles = {
    backgroundColor: theme.palette.background.paper,
  };
  return styles;
});

const Popper: React.FC<Props> = ({
  children,
  placement = "top",
  content,
  paperProps = {},
  onClickAway,
  duration = 200,
  popperRef,
}) => {
  const [portalEnable, setPortalEnable] = useState<boolean>(false);
  // const theme = useTheme();
  const isText = typeof content === "string";
  const [visible, setVisible] = React.useState<boolean | null>(null);
  const referenceElement = React.useRef<Element | VirtualElement>(null);
  const popperElement = React.useRef<HTMLDivElement | null>(null);
  const { styles, attributes } = usePopper(
    referenceElement.current,
    popperElement.current,
    {
      modifiers: [flip, preventOverflow],
      placement: placement,
    }
  );
  const getRef = useMemo(() => {
    const childElement = React.Children.only(children);

    return React.isValidElement(childElement)
      ? React.cloneElement(childElement, {
          ref: referenceElement,
          onClick: () => {
            setPortalEnable(true);
            setTimeout(() => {
              setVisible(!visible);
            }, 30);
          },
        })
      : null;
  }, [children]);
  const handleEvents = useCallback(
    (event: MouseEvent | TouchEvent): void => {
      if (
        visible === true &&
        popperElement.current &&
        !popperElement.current.contains(event.target as Node)
      ) {
        if (onClickAway) onClickAway(event);
        setVisible(false);
        setTimeout(() => {
          setPortalEnable(false);
          setVisible(null);
        }, duration - 10);
      }
    },
    [visible]
  );

  React.useEffect(() => {
    document.addEventListener("mousedown", handleEvents);
    document.addEventListener("touchmove", handleEvents);
    return () => {
      document.removeEventListener("mousedown", handleEvents);
      document.removeEventListener("touchmove", handleEvents);
    };
  }, [visible]);

  useImperativeHandle(popperRef, () => ({
    open: () => {
      setPortalEnable(true);
      setTimeout(() => {
        setVisible(!visible);
      }, 30);
    },
    close: () => {
      setVisible(false);
      setTimeout(() => {
        setPortalEnable(false);
      }, 30);
    },
  }));

  return (
    <Fragment>
      {/* @ts-ignore */}

      {/* <div
        css={{ display: "inline-block" }}
        {...{
          ref: referenceElement,
          onClick: () => {
            setPortalEnable(true);
            setTimeout(() => {
              setVisible(!visible);
            }, 30);
          },
        }}
      >
        {children}
      </div> */}
      {getRef}
      <Portal enable={portalEnable}>
        <div
          ref={popperElement}
          // style={styles}
          // {...attributes}
          data-show={visible !== null}
        >
          <Transition
            // animation={{
            //   in: {
            //     from: { top: 50, opacity: 0 },
            //     to: { top: 0, opacity: 1 },
            //   },
            //   out: {
            //     from: { top: 0, opacity: 1 },
            //     to: { top: 50, opacity: 0 },
            //   },
            // }}
            defaultStyle={{ transform: `translateY(${-20}px)`, opacity: 0 }}
            from={{ transform: `translateY(${-20}px)`, opacity: 0 }}
            to={{ transform: `translateY(${0}px)`, opacity: 1 }}
            in={visible}
            duration={duration}
            // onEnd={()   =>   setVisible(false)}
          >
            <StyledPopper
              bgColor={"paper"}
              // p={[5, 12]}
              // color="white"
              shadow={2}
              radius={6}
              css={{
                minWidth: 60,
                textAlign: isText ? "center" : "left",
              }}
              {...paperProps}
            >
              {isText ? (
                <Text tag="span" variant="caption" align="center">
                  {content}
                </Text>
              ) : (
                content
              )}
            </StyledPopper>
          </Transition>
        </div>
      </Portal>
    </Fragment>
  );
};

export default Popper;
type Props = {
  // duration transition
  duration?: number;
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
  popperRef?: React.Ref<{ open: () => void; close: () => void }>;
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
