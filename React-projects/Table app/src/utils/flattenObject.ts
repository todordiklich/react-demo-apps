export function flattenObject(object: any) {
  const result: any = {};

  for (const key in object) {
    if (typeof object[key] === 'object' && !Array.isArray(object[key])) {
      const temp = flattenObject(object[key]);

      for (const tempKey in temp) {
        result[tempKey] = temp[tempKey];
      }
    } else {
      result[key] = object[key];
    }
  }

  return result;
}
