import Theme, { Breakpoints } from "./Types";
import { CSSObject } from "@emotion/css";
import getValueWithObjectPath from "../helpers/getValueWithObjectPath";
import { isObject } from "../helpers/is";

type anyObject = { [key: string]: any };
// based on https://github.com/developit/dlv

export const get = (
  obj: anyObject,
  key: string | number,
  def?: any,
  p?: number,
  undef?: any
) => {
  let keyArr: (number | string)[] =
    typeof key === "string" && key.split ? key.split(".") : [key];
  for (p = 0; p < keyArr.length; p++) {
    obj = obj ? obj[keyArr[p]] : undef;
  }
  return obj === undef ? def : obj;
};

const aliases = {
  bg: "backgroundColor",
  w: "width",
  h: "height",
  m: "margin",
  mt: "marginTop",
  mr: "marginRight",
  mb: "marginBottom",
  ml: "marginLeft",
  mx: "marginX",
  my: "marginY",
  p: "padding",
  pt: "paddingTop",
  pr: "paddingRight",
  pb: "paddingBottom",
  pl: "paddingLeft",
  px: "paddingX",
  py: "paddingY",
};

export type sxType = CSSObject & {
  //BreakPoints
  xs?: CSSObject;
  sm?: CSSObject;
  md?: CSSObject;
  lg?: CSSObject;
  xl?: CSSObject;
  // ------------
  bg?: string | Breakpoints;
  w?: string | number | Breakpoints;
  h?: string | number | Breakpoints;
  m?: string | number | Breakpoints;
  mt?: string | number | Breakpoints;
  mr?: string | number | Breakpoints;
  mb?: string | number | Breakpoints;
  ml?: string | number | Breakpoints;
  mx?: string | number | Breakpoints;
  my?: string | number | Breakpoints;
  p?: string | number | Breakpoints;
  pt?: string | number | Breakpoints;
  pr?: string | number | Breakpoints;
  pb?: string | number | Breakpoints;
  pl?: string | number | Breakpoints;
  px?: string | number | Breakpoints;
  py?: string | number | Breakpoints;
};
const multiples = {
  bg: ["backgroundColor"],
  marginX: ["marginLeft", "marginRight"],
  marginY: ["marginTop", "marginBottom"],
  paddingX: ["paddingLeft", "paddingRight"],
  paddingY: ["paddingTop", "paddingBottom"],
  size: ["width", "height"],
};

const scales = {
  color: "colors",
  backgroundColor: "colors",
  borderColor: "colors",
  margin: "space",
  marginTop: "space",
  marginRight: "space",
  marginBottom: "space",
  marginLeft: "space",
  marginX: "space",
  marginY: "space",
  padding: "space",
  paddingTop: "space",
  paddingRight: "space",
  paddingBottom: "space",
  paddingLeft: "space",
  paddingX: "space",
  paddingY: "space",
  top: "space",
  right: "space",
  bottom: "space",
  left: "space",
  gridGap: "space",
  gridColumnGap: "space",
  gridRowGap: "space",
  gap: "space",
  columnGap: "space",
  rowGap: "space",
  fontFamily: "fonts",
  fontSize: "fontSizes",
  fontWeight: "fontWeights",
  lineHeight: "lineHeights",
  letterSpacing: "letterSpacings",
  border: "borders",
  borderTop: "borders",
  borderRight: "borders",
  borderBottom: "borders",
  borderLeft: "borders",
  borderWidth: "borderWidths",
  borderStyle: "borderStyles",
  borderRadius: "radii",
  borderTopRightRadius: "radii",
  borderTopLeftRadius: "radii",
  borderBottomRightRadius: "radii",
  borderBottomLeftRadius: "radii",
  borderTopWidth: "borderWidths",
  borderTopColor: "colors",
  borderTopStyle: "borderStyles",
  borderBottomWidth: "borderWidths",
  borderBottomColor: "colors",
  borderBottomStyle: "borderStyles",
  borderLeftWidth: "borderWidths",
  borderLeftColor: "colors",
  borderLeftStyle: "borderStyles",
  borderRightWidth: "borderWidths",
  borderRightColor: "colors",
  borderRightStyle: "borderStyles",
  outlineColor: "colors",
  boxShadow: "shadows",
  textShadow: "shadows",
  zIndex: "zIndices",
  width: "sizes",
  minWidth: "sizes",
  maxWidth: "sizes",
  height: "sizes",
  minHeight: "sizes",
  maxHeight: "sizes",
  flexBasis: "sizes",
  size: "sizes",
  // svg
  fill: "colors",
  stroke: "colors",
};

const positiveOrNegative = (scale: sxType, value: number) => {
  if (typeof value !== "number" || value >= 0) {
    return get(scale, value, value);
  }
  const absolute = Math.abs(value);
  const n = get(scale, absolute, absolute);
  if (typeof n === "string") return "-" + n;
  return n * -1;
};

const transforms = [
  "margin",
  "marginTop",
  "marginRight",
  "marginBottom",
  "marginLeft",
  "marginX",
  "marginY",
  "top",
  "bottom",
  "left",
  "right",
].reduce(
  (acc, curr) => ({
    ...acc,
    [curr]: positiveOrNegative,
  }),
  {}
);
const transformList = {
  bg: "backgroundColor",
  w: "width",
  h: "height",
  m: "margin",
  mt: "marginTop",
  mr: "marginRight",
  mb: "marginBottom",
  ml: "marginLeft",
  mx: "marginInline",
  my: "marginBlock",
  p: "padding",
  pt: "paddingTop",
  pr: "paddingRight",
  pb: "paddingBottom",
  pl: "paddingLeft",
  px: "paddingInline",
  py: "paddingBlock",
};

export const responsive = (styles: (theme: Theme) => sxType | sxType) => (
  theme: Theme
) => {
  const next = {};
  const breakpoints = Object.values(theme.breakpoints.values);
  const mediaQueriesList = [
    null,
    ...breakpoints.map(
      (n) =>
        `@media screen and (min-width: ${typeof n === "number" ? n + "px" : n})`
    ),
  ];
  const mediaQueriesObject = Object.fromEntries(
    Object.entries(theme.breakpoints.values).map(([k, v]) => [
      k,
      `@media screen and (min-width: ${typeof v === "number" ? v + "px" : v})`,
    ])
  );

  for (const key in styles) {
    const value =
      typeof styles[key] === "function" ? styles[key](theme) : styles[key];

    if (value === null) continue;

    if (
      isObject(value) &&
      Object.keys(theme.breakpoints.values).includes(key)
    ) {
      next[mediaQueriesObject[key]] = sxPropInitialiter(value)(theme);
    } else if (Array.isArray(value)) {
      for (let i = 0; i < value.slice(0, mediaQueriesList.length).length; i++) {
        const media = mediaQueriesList[i];
        if (!media) {
          next[key] = value[i];
          continue;
        }
        next[media] = next[media] || {};
        if (value[i] === null) continue;
        next[media][key] = value[i];
      }
    } else {
      next[key] = value;
      continue;
    }
  }
  return next;
};

export const sxPropInitialiter = (args: (theme: Theme) => sxType | sxType) => (
  theme: Theme
) => {
  let result = {};
  const obj = typeof args === "function" ? args(theme) : args;
  //  @ts-ignore
  const styles = responsive(obj)(theme);

  for (const key in styles) {
    const x = styles[key];
    const val = typeof x === "function" ? x(theme) : x;

    if (key === "variant") {
      const variant = sxPropInitialiter(get(theme, val))(theme);
      result = { ...result, ...variant };
      continue;
    }

    if (isObject(val)) {
      if (
        Object.keys(val).some((a) =>
          Object.keys(theme.breakpoints.values).includes(a)
        )
      ) {
        for (const breakPointType of Object.keys(val)) {
          //@ts-ignore
          let breakPointKey = theme.breakpoints.up(breakPointType);
          if (isObject(result[breakPointKey])) {
            result[breakPointKey] = Object.assign({}, result[breakPointKey], {
              [transformList[key] || key]: sxPropInitialiter(val)(theme)[
                breakPointType
              ],
            });
            if (transformList[key]) {
              delete result[breakPointKey][key];
            }
          } else {
            result[breakPointKey] = {
              [key]: sxPropInitialiter(val)(theme),
            };
          }
        }
      } else {
        result[key] = sxPropInitialiter(val)(theme);
        continue;
      }
    }

    const prop = get(aliases, key, key);
    const scaleName = get(scales, prop);
    const scale = get(theme, scaleName, get(theme, prop, {}));
    const transform = get(transforms, prop, get);
    const value = transform(scale, val, val);

    if (multiples[prop]) {
      const dirs = multiples[prop];
      console.log(`dirs`, dirs);
      for (let i = 0; i < dirs.length; i++) {
        result[dirs[i]] =
          typeof value === "string" && value.includes(".")
            ? getValueWithObjectPath(theme, value)
            : value;
      }
    } else {
      if (
        isObject(value) &&
        Object.keys(value).some((a) =>
          Object.keys(theme.breakpoints.values).includes(a)
        )
      ) {
      } else {
        result[prop] =
          typeof value === "string" && value.includes(".")
            ? getValueWithObjectPath(theme, value)
            : value;
      }
    }
  }

  return result;
};

const sxPropGenerator = (props: anyObject) =>
  sxPropInitialiter(props.sx)(props.theme);
export default sxPropGenerator;
