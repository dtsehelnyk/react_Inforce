// interface setComponentInterface {
//   (object: object): void;
// }

import ProductType from '../types/types';

export const getStorageData = (
  dataName: string,
): ProductType => {
  const data: string = localStorage.getItem(dataName) || '[]';
  return JSON.parse(data);
}

export const setStorageData = (
  dataName: string,
  dataToStorage: object
): void => {
  localStorage.setItem(dataName, JSON.stringify(dataToStorage));
}
