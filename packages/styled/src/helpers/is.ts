export const isObject = (target: any) =>
  !Array.isArray(target) && target !== null && typeof target === "object";
