import * as types from './actionTypes';

const defaultState = {
  matrix: [],
  score: 0,
  bestScore: 0,
  gameOver: false,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.INIT_MATRIX:
      return {
        ...state,
        ...addTilesToMatrix(state.matrix),
      };
    case types.RESET_MATRIX:
      return {
        ...defaultState,
        ...addTilesToMatrix(defaultState.matrix),
        bestScore: state.bestScore,
      };
    case types.RANDOM_TILE:
      console.log(action);
      return state;
    case types.MOVE_UP:
      console.log(action);
      return state;
    case types.MOVE_DOWN:
      console.log(action);
      return state;
    case types.MOVE_LEFT:
      console.log(action);
      return state;
    case types.MOVE_RIGHT:
      console.log(action);
      return state;
    default:
      return state;
  }
}

const getAvlCoords = matrix => {
  if (!(Array.isArray(matrix) && Array.isArray(matrix[0]))) return [];

  let coords = [];

  matrix.forEach((row, rowIdx) => {
    row.forEach((cell, cellIdx) => {
      if (cell === 0) coords = coords.concat([[rowIdx, cellIdx]]);
    });
  });

  return coords;
};

const getRandomTile = arr => arr[Math.round(Math.random() * (arr.length - 1))];

const hasMatrixChanged = (prevMatrix, currMatrix) => JSON.stringify(prevMatrix) !== JSON.stringify(currMatrix);

const isGameOver = matrix => {
  // const matrixCopy = matrix;
  const moveable = fn => {
    return hasMatrixChanged(matrix, fn().matrix);
  };
  const movement = [
    moveable(swipeUp),
    moveable(swipeDown),
    moveable(swipeLeft),
    moveable(swipeRight),
  ];
  return !movement.includes(true);
};

const addTileToMatrix = matrix => {
  let newMatrix = JSON.parse(JSON.stringify(matrix));;

  const avlCoords = getAvlCoords(matrix);
  const randomCoord = getRandomTile(avlCoords);

  newMatrix[randomCoord[0]][randomCoord[1]] = getRandomTile([2, 4]);

  return {matrix: newMatrix};
};

const addTilesToMatrix = matrix => addTileToMatrix(addTileToMatrix(matrix).matrix);
