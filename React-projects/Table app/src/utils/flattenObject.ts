export function flattenObject(object: object) {
  const result: object = {};

  for (const key in object) {
    if (
      typeof object[key as keyof typeof object] === 'object' &&
      !Array.isArray(object[key as keyof typeof object])
    ) {
      const temp = flattenObject(object[key as keyof typeof object]);

      for (const tempKey in temp) {
        result[tempKey as keyof typeof result] =
          temp[tempKey as keyof typeof temp];
      }
    } else {
      result[key as keyof typeof result] = object[key as keyof typeof object];
    }
  }

  return result;
}
