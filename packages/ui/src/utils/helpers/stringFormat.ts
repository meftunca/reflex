export const camelToKebabCase = (
  str: string,
  prefix: string = "--",
  suffix: string = ""
) =>
  prefix +
  str.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}` + suffix);

export const boxMarginPaddingGenerator = (
  sizes?: any | any[],
  suffix: string = "px"
) => {
  if (Array.isArray(sizes)) {
    return sizes
      .map((i) => (typeof i === "number" && i !== NaN ? i + suffix : 0))
      .join(" ");
  } else {
    return sizes + suffix;
  }
};

export const generateFakeID = ({
  prefix,
  suffix,
}: {
  prefix?: string;
  suffix?: string;
}) => {
  return (
    prefix + Number(Date.now() + Math.random() * 9999).toString(16) + suffix
  );
};

export function mergeClassNames(...args: any) {
  return args
    .reduce(
      (classList: any[], arg: any) =>
        typeof arg === "string" || arg instanceof Array
          ? classList.concat(arg)
          : classList,
      []
    )
    .filter(Boolean)
    .join(" ");
}
