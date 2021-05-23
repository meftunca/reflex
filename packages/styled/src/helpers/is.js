export const isObject = (target) => !Array.isArray(target) && target !== null && typeof target === "object";
