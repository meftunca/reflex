//@ts-nocheck
import styled from "@emotion/styled";
import { FC, useCallback, useEffect, useRef, useState } from "react";
import { css } from "@emotion/react";
import SXBase, { SXBaseProps } from "@re-flex/styled/src/SX";
const BGImageBase = styled(SXBase)<
  SXBaseProps & { bgImage: string; aspectRatio?: "16/9" | "4/3" | "1" }
>(({ bgImage, aspectRatio }) => ({
  aspectRatio: aspectRatio,
  backgroundImage: bgImage,
  backgroundRepeat: "no-repeat",
  backgroundSize: "100%",
}));

const BGImage: FC<
  SXBaseProps & {
    bgImage: string;
    aspectRatio?: "16/9" | "4/3" | "1";
  }
> = ({ bgImage, aspectRatio = "16/9" }) => {
  return <BGImageBase bgImage={`url(${bgImage})`} aspectRatio={aspectRatio} />;
};

export default BGImage;
