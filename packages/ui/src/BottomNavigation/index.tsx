import React, { useMemo } from "react";
import BottomNavigationItem from "./Styled/BottomNavigationItem";
import BottomNavigationWrapper from "./Styled/BottomNavigationWrapper";
import { BoxProps } from "../Box";
import { useTheme } from "@emotion/react";

type SubComponents = {
  Action: React.ReactNode;
};

type Props = BoxProps & {
  /* Aktif navigasyon elemanının indis değeri */
  index: number;
  /* Yeni navigasyon elemanının indis değerini döndüren fonksiyon */
  onChangeIndex: (activeIndex: number) => void;
};

const BottomNavigation: React.FC<Props> & SubComponents = ({
  children,
  index,
  onChangeIndex,
  ...props
}) => {
  const theme = useTheme();

  const generatedChildren = useMemo(() => {
    return React.Children.map(children, (child, childIndex) => (
      <>
        {React.cloneElement(
          child as React.ReactElement<any>,
          {
            active: childIndex === index,
            onClick: () =>
              typeof onChangeIndex === "function" && onChangeIndex(childIndex),
          },
          null
        )}
      </>
    ));
  }, [children]);

  return (
    <BottomNavigationWrapper {...props}>
      {generatedChildren}
    </BottomNavigationWrapper>
  );
};
BottomNavigation.Action = BottomNavigationItem;

export default BottomNavigation;
