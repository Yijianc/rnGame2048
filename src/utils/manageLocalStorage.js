import { AsyncStorage } from 'react-native';

const BEST_SCORE = "bestScore";

export const getItem = (key) => {
  AsyncStorage
    .getItem(key)
    .then((value) => {
      console.log(value, 'value');
      return value;
    })
    .catch((err) => {})
}

export const setItem = (key, value) => AsyncStorage.setItem(key, JSON.stringify(value));

export const removeItem = (key) => AsyncStorage.removeItem(key);

export const getBestScore = (success = (f) => f, error = (f) => f) => this.getItem(this.bestScore, success, error);

export const setBestScore = (score) => this.setItem(BEST_SCORE, score);
