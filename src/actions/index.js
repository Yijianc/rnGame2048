/**
 * Create constant types.
 * @param  {String} [base='']  prefix of constants
 * @param  {Array}  [types=[]] suffixes of constants
 * @return {Object}            store constants
 */
const createTypes = (base = '', types = []) => {
  return types.reduce((acc, type) => {
    acc[type] = `${base}_${type}`;
    return acc;
  }, {});
};

const FETCH   = 'FETCH';
const INIT    = 'INIT';
const UPDATE  = 'UPDATE';
const RESET   = 'RESET';
const LEFT    = 'LEFT';
const UP      = 'UP';
const RIGHT   = 'RIGHT';
const DOWN    = 'DOWN';
const SHOW    = 'SHOW';
const CLOSE   = 'CLOSE';

const PROCESSORS   = [FETCH, INIT, UPDATE, RESET];
const SWIPE_ACTIONS = [LEFT, UP, RIGHT, DOWN];
const DISPLAY      = [SHOW, CLOSE];

// Constants begin.
// ================================================================

export const MATRIX       = createTypes('MATRIX', PROCESSORS);
export const BEST_SCORE   = createTypes('BEST_SCORE', PROCESSORS);
export const RANK         = createTypes('TOP_RANK', PROCESSORS);
export const SWIPE        = createTypes('SWIPE', SWIPE_ACTIONS);
export const MODAL        = createTypes('MODAL', DISPLAY);
export const RANDOM_TILE  = 'RANDOM_TILE';
export const GAME_OVER    = 'GAME_OVER';

// Constants end.
// ================================================================





// Actions begin.
// ================================================================

const action = (type, payload = {}) => ({type, ...payload});

export const gameOverAction = () => action(GAME_OVER);

export const matrixActions = {
  fetch: () => action(MATRIX[FETCH]),
  init: initialState => action(MATRIX[INIT], {initialState}),
  update: () => action(MATRIX[UPDATE]),
  reset: () => action(MATRIX[RESET]),
  placeRandomTile: () => action(RANDOM_TILE),
};

export const bestScoreActions = {
  fetch: () => action(BEST_SCORE[FETCH]),
  init: bestScore => action(BEST_SCORE[INIT], {bestScore}),
  update: (score, bestScore) => action(BEST_SCORE[UPDATE], {score, bestScore}),
  reset: () => action(BEST_SCORE[RESET]),
};

export const topRankActions = {
  fetch: () => action(RANK[FETCH]),
  init: topRank => action(RANK[INIT], {topRank}),
  update: topRank => action(RANK[UPDATE], {topRank}),
  reset: () => action(RANK[RESET]),
};

export const swipeActions = {
  left: () => action(SWIPE[LEFT]),
  up: () => action(SWIPE[UP]),
  right: () => action(SWIPE[RIGHT]),
  down: () => action(SWIPE[DOWN]),
};

export const modalActions = {
  show: modalSetting => action(MODAL[SHOW], {modalSetting}),
  close: () => action(MODAL[CLOSE]),
};

// Actions end.
// ================================================================
