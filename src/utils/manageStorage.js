import { AsyncStorage } from 'react-native';

import { detectJSONStr, detectArray } from './helpers';

const APP_STATE = 'APP_STATE';

export const getItem = (key) => AsyncStorage.getItem(key);

export const setItem = (key, value) => {
  const valJSON = detectJSONStr(value) ? value : JSON.stringify(value);
  AsyncStorage.setItem(key, valJSON);
};

export const multiSet = (multiKeyValPairs) => {
  let pairs = [...multiKeyValPairs];

  pairs = pairs.map((item) => {
    if (detectArray(item)) {
      const [key, value] = item;

      const valJSON = detectJSONStr(value) ? value : JSON.stringify(value);

      return [key, valJSON];
    }
    return item;
  });

  AsyncStorage.multiSet(pairs);
};

export const getAllKeys = () => AsyncStorage.getAllKeys();

export const clearData = () => {
  return getAllKeys().then((value) => {
    console.log(value, '#getAllKeys => #clearData');
    return AsyncStorage.multiRemove([...value]);
  });
};

export const fetchAppState = () => getItem(APP_STATE);
