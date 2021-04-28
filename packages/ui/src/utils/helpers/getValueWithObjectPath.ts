type anyObject = { [key: string]: any };

function getValueWithObjectPath(
  obj: anyObject,
  path: string,
  defaultValue?: string | number,
  delimiter?: string
) {
  if (typeof path !== "string") return undefined;
  let pathList = path.split(delimiter || ".");
  if (Array.isArray(pathList)) {
    let filteredObj: any = obj;

    for (const value of pathList) {
      if (
        filteredObj &&
        (Object.prototype.hasOwnProperty.call(filteredObj, value) ||
          filteredObj[value])
      ) {
        filteredObj = filteredObj[value];
      } else {
        return defaultValue;
      }
    }

    return filteredObj;
  } else {
    return defaultValue;
  }
}

export default getValueWithObjectPath;
