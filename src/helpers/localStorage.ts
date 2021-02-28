import ProductType from '../types/types';

export const getStorageData = (dataName: string): any => {
  const dataString = localStorage.getItem(dataName) || '[]';
  return (JSON.parse(dataString));
}

export const setStorageData = (
  dataName: string,
  data: ProductType[] | [],
): void => {
  localStorage.setItem(dataName, JSON.stringify(data));
}
