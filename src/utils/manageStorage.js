import { AsyncStorage } from 'react-native';

const BEST_SCORE = "bestScore";
const TOP_RANK = "topRank";

// export const getItem = async (key) => {
//   try {
//     return await AsyncStorage.getItem(key);
//   } catch (e) {
//     console.log('Failed to get item: ', e);
//   }
// };
export const getItem = (key) => AsyncStorage.getItem(key);

export const setItem = (key, value) => AsyncStorage.setItem(key, JSON.stringify(value));

export const removeItem = (key) => AsyncStorage.removeItem(key);

export const fetchBestScore = () => getItem(BEST_SCORE);

export const setBestScore = (score) => setItem(BEST_SCORE, score);

export const fetchTopRank = () => getItem(TOP_RANK);

export const setTopRank = (topRank) => setItem(TOP_RANK, topRank);
