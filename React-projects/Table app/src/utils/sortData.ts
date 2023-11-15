import { sortOrderType } from './types';

export function sortData(data: any, key: string, sortOrder: sortOrderType) {
  if (sortOrder === 'default' || key === '') {
    return data;
  }
  const order = sortOrder === 'asc' ? 1 : -1;

  return data.sort((a: any, b: any) => {
    if (a[key] < b[key]) {
      return -1 * order;
    } else if (a[key] > b[key]) {
      return 1 * order;
    }
    return 0;
  });
}
