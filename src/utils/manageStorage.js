import { AsyncStorage } from 'react-native';

const BEST_SCORE = 'bestScore';
const TOP_RANK   = 'topRank';
const MATRIX     = 'boardState';

export const getItem = (key) => AsyncStorage.getItem(key);

export const setItem = (key, value) => AsyncStorage.setItem(key, JSON.stringify(value));

export const multiSet = (multiKeyValPairs) => {
  let pairs = [...multiKeyValPairs];
  pairs = pairs.map((item) => [item[0], JSON.stringify(item[1])]);
  AsyncStorage.multiSet(pairs);
};

export const getAllKeys = () => AsyncStorage.getAllKeys();

export const clearData = () => {
  return getAllKeys().then((value) => {
    console.log(value, '#getAllKeys => #clearData');
    return AsyncStorage.multiRemove([...value]);
  });
};

export const fetchTopRank = () => getItem(TOP_RANK);

export const fetchMatrix = () => getItem(MATRIX);
