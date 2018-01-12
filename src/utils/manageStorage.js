import { AsyncStorage } from 'react-native';

const BEST_SCORE = 'bestScore';
const TOP_RANK   = 'topRank';
const MATRIX     = 'matrix';

export const getItem = (key) => AsyncStorage.getItem(key);

export const setItem = (key, value) => AsyncStorage.setItem(key, JSON.stringify(value));

// multiSet([['k1', 'val1'], ['k2', 'val2']], cb);
export const multiSet = (multiKeyValPairs) => {
  let pairs = [...multiKeyValPairs];
  pairs = pairs.map((item) => [item[0], JSON.stringify(item[1])]);
  AsyncStorage.multiSet(pairs);
};

export const removeItem = (key) => AsyncStorage.removeItem(key);

export const getAllKeys = () => {
  AsyncStorage.getAllKeys().then((value) => {
    console.log(value, '#getAllKeys');
  });
};
getAllKeys();
// static getAllKeys(callback?: ?(error: ?Error, keys: ?Array<string>) => void)
// 获取所有本应用可以访问到的数据，不论来自什么库或调用者。返回一个Promise对象。

export const clearData = () => {
  AsyncStorage.multiRemove(['state']).then((value) => {
    console.log(value, '#multiRemove');
  });
};
// static multiRemove(keys: Array<string>, callback?: ?(errors: ?Array<Error>) => void)
// 删除所有键在keys数组中的数据。返回一个Promise对象。

export const fetchBestScore = () => getItem(BEST_SCORE);

export const setBestScore = (score) => setItem(BEST_SCORE, score);

export const fetchTopRank = () => getItem(TOP_RANK);

export const setTopRank = (topRank) => setItem(TOP_RANK, topRank);

export const fetchMatrix = () => getItem(MATRIX);

export const setMatrix = (matrix) => setItem(MATRIX, matrix);
