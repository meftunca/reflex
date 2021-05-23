import { parseToRgba } from "color2k";

const isColorDark = (color: string) => {
  let rgb = parseToRgba(color);
  let yiq = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
  return yiq < 128;
};

export default isColorDark;
