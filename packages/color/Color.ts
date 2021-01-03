const HEX_RULE = /^#?([a-f\d]{1,2})([a-f\d]{1,2})([a-f\d]{1,2})([a-f\d]{1,2})?$/i;
const RGBA_RULE = /^rgb?a?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/i;

class Color {
  color: string;
  constructor(color: string) {
    this.color = color;
  }
  hexToRgb(hex?: string, index: number = 0) {
    const value = hex ? parseInt(hex, 16) : 0;
    return index === 3 ? (hex === undefined ? 0 : value) : value;
  }
  parseToRgba(): [number, number, number, number] {
    const result: null | any[] = HEX_RULE.exec(this.color);
    if (result) {
      let r = result[1],
        g = result[2],
        b = result[3],
        a = result[4];
      return [r, g, b, a].map(this.hexToRgb);
    } else return [0, 0, 0, 0];
  }
  guard(low: number, high: number, value: number): number {
    return Math.min(Math.max(low, value), high);
  }
  parseToHsla(): [number, number, number, number] {
    const [red, green, blue, alpha] = this.parseToRgba();

    const max = Math.max(red, green, blue);
    const min = Math.min(red, green, blue);
    const lightness = (max + min) / 2;

    // achromatic
    if (max === min) return [0, 0, lightness, alpha];

    const delta = max - min;
    const saturation =
      lightness > 0.5 ? delta / (2 - max - min) : delta / (max + min);

    const hue =
      60 *
      (red === max
        ? (green - blue) / delta + (green < blue ? 6 : 0)
        : green === max
        ? (blue - red) / delta + 2
        : (red - green) / delta + 4);

    return [hue, saturation, lightness, alpha];
  }
  // input: h in [0,360] and s,v in [0,1] - output: r,g,b in [0,1]
  hsl2rgb(h, s, l) {
    let a = s * Math.min(l, 1 - l);
    let f = (n, k = (n + h / 30) % 12) =>
      l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return [f(0), f(8), f(4)];
  }
  hsla(
    hue: number,
    saturation: number,
    lightness: number,
    alpha: number
  ): string {
    return `rgba(${this.hsl2rgb(hue, saturation, lightness)},${alpha})`;
  }
  darken(amount: number): string {
    const [hue, saturation, lightness, alpha] = this.parseToHsla();

    console.log(hue, saturation, lightness, alpha);
    return this.hsla(hue, saturation, lightness - amount, alpha);
  }
  lighten(amount: number): string {
    return this.darken(-amount);
  }
  toHex() {
    //	const hex = (x: number) => guard(0, 255, x).toString(16).padEnd(2, '0');
    //return `#${hex(r)}${hex(g)}${hex(b)}${
    //a < 1 ? hex(Math.round(a * 255)) : ''
    //}`;
  }
  rgba(red: number, green: number, blue: number, alpha: number): string {
    let r = this.guard(0, 255, red).toFixed(),
      g = this.guard(0, 255, green).toFixed(),
      b = this.guard(0, 255, blue).toFixed(),
      a = parseFloat(this.guard(0, 1, alpha).toFixed(3));

    return `rgba(${r}, ${g}, ${b}, ${a})`;
  }
  toRgba(color: string): string {
    return this.rgba(...this.parseToRgba());
  }
}

export default Color;
