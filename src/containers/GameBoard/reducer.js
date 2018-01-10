import * as types from './actionTypes';

class Matrix {
  constructor(props) {
    const {matrix, score, bestScore, gameOver, moved} = props || {};
    this.matrix = JSON.parse(JSON.stringify(matrix));
    this.score = score;
    this.bestScore = bestScore;
    this.gameOver = gameOver;
    this.moved = moved;
  }

  getAvlCoords = matrix => {
    let coords = [];

    matrix.forEach((row, rowIdx) => {
      row.forEach((cell, cellIdx) => {
        if (cell === 0) coords = coords.concat([[rowIdx, cellIdx]]);
        }
      );
    });

    return coords;
  };

  generateRandomTile = arr => arr[Math.round(Math.random() * (arr.length - 1))];

  hasMatrixChanged = (preMatrix, currMatrix) => JSON.stringify(preMatrix) !== JSON.stringify(currMatrix);

  checkGameOver = matrix => {
    const matrixCopy = JSON.parse(JSON.stringify(matrix));

    const check = fn => {
      const moved = this.hasMatrixChanged(matrixCopy, fn().matrix);
      this.matrix = matrixCopy; // Reset to origin matrix
      return moved;
    };

    const movement = [
      check(this.swipeUp),
      check(this.swipeDown),
      check(this.swipeLeft),
      check(this.swipeRight)
    ];

    return !movement.includes(true);
  };

  addRandomTile = () => {
    const {matrix} = this;
    const newMatrix = JSON.parse(JSON.stringify(matrix));

    if (this.gameOver) return {matrix};

    if (!this.moved) {
      if (this.checkGameOver(newMatrix)) {
        this.gameOver = true;
        return {gameOver: true};
      }
      return {matrix};
    }

    const avlCoords = this.getAvlCoords(matrix);
    if (avlCoords.length === 0) {
      if (this.checkGameOver(newMatrix)) {
        this.gameOver = true;
        return {gameOver: true};
      }
      return {matrix: newMatrix};
    }

    const coord = this.generateRandomTile(avlCoords);
    newMatrix[coord[0]][coord[1]] = this.generateRandomTile([2, 4]);
    if (this.checkGameOver(newMatrix)) {
      this.gameOver = true;
      return {gameOver: true, matrix: newMatrix};
    }
    this.matrix = newMatrix;

    return {matrix: newMatrix};
  };

  rotateRight = () => {
    const {matrix} = this;
    let newMat = [];
    const len = matrix.length;
    for (let col = 0; col < len; col++) {
      let newRow = [];
      for (let row = len - 1; row >= 0; row--) {
        // newRow.push(matrix[row][col]);
        newRow = newRow.concat([matrix[row][col]]);
      }
      // newMat.push(newRow);
      newMat = newMat.concat([newRow]);
    }

    this.matrix = newMat;
    return newMat;
  };

  rotateLeft = () => {
    const {matrix} = this;
    let newMat = [];
    const len = matrix.length;

    for (let col = len - 1; col >= 0; col--) {
      let newRow = [];
      for (let row = len - 1; row >= 0; row--) {
        newRow.unshift(matrix[row][col]);
      }
      newMat.push(newRow);
    }

    this.matrix = newMat;
    return newMat;
  };

  shiftRight = () => {
    const {matrix} = this;
    let newMat = [];
    const len = matrix.length;

    // Shift all numbers to the right
    for (let row = 0; row < len; row++) {
      const boardRow = [];
      for (let col = 0; col < matrix[row].length; col++) {
        const current = matrix[row][col];
        if (current === 0)
          boardRow.unshift(current);
        else
          boardRow.push(current);
        }
      newMat.push(boardRow);
    }
    this.matrix = newMat;
    return newMat;
  };

  shiftLeft = () => {
    const {matrix} = this;
    let newMat = [];
    const len = matrix.length;
    for (let r = 0; r < len; r++) {
      let newRow = [];
      for (let c = matrix[r].length - 1; c >= 0; c--) {
        const curr = matrix[r][c];
        if (curr === 0)
          newRow.push(curr);
        else
          newRow.unshift(curr);
        }
      newMat.push(newRow);
    }
    this.matrix = newMat;
    return newMat;
  };

  combineNumToLeft = () => {
    const {matrix} = this;
    const len = matrix.length;

    for (let row = 0; row < len; row++) {
      for (let col = 0; col < len; col++) {
        if (matrix[row][col] > 0 && matrix[row][col] === matrix[row][col + 1]) {
          matrix[row][col] *= 2;
          matrix[row][col + 1] = 0;
          this.score += matrix[row][col];
        } else if (matrix[row][col] === 0 && matrix[row][col + 1] > 0) {
          matrix[row][col] = matrix[row][col + 1];
          matrix[row][col + 1] = 0;
        }
      }
    }
    this.matrix = matrix;
    return matrix;
  };

  combineNumToRight = () => {
    const {matrix} = this;
    const len = matrix.length;
    // Combine numbers and shift to right
    for (let row = 0; row < len; row++) {
      for (let col = matrix[row].length - 1; col >= 0; col--) {
        if (matrix[row][col] > 0 && matrix[row][col] === matrix[row][col - 1]) {
          matrix[row][col] *= 2;
          matrix[row][col - 1] = 0;
          this.score += matrix[row][col];
        } else if (matrix[row][col] === 0 && matrix[row][col - 1] > 0) {
          matrix[row][col] = matrix[row][col - 1];
          matrix[row][col - 1] = 0;
        }
      }
    }
    this.matrix = matrix;
    return matrix;
  };

  move = callback => {
    const prevMatrix = JSON.parse(JSON.stringify(this.matrix));
    callback();

    const {matrix, score, bestScore} = this;
    const moved = this.hasMatrixChanged(prevMatrix, matrix);
    const rsp = {
      matrix,
      score,
      bestScore: score > bestScore ? score : bestScore,
      moved
    };
    // if (moved) {
    //   rsp.prevMatrix = prevMatrix;
    // }
    return rsp;
  };

  swipeUp = () => this.move(() => {
    this.rotateRight();
    this.shiftRight();
    this.combineNumToRight();
    // Rotate board back upright
    this.rotateLeft();
  });

  swipeDown = () => this.move(() => {
    this.rotateRight();
    this.shiftLeft();
    this.combineNumToLeft();
    this.rotateLeft();
  });

  swipeLeft = () => this.move(() => {
    this.shiftLeft();
    this.combineNumToLeft();
  });

  swipeRight = () => this.move(() => {
    this.shiftRight();
    this.combineNumToRight();
  });
}

const defaultState = {
  matrix: Array(4).fill(Array(4).fill(0)),
  score: 0,
  bestScore: 0,
  gameOver: false,
  moved: true,
};

export default (state = defaultState, action) => {
  let matrix = new Matrix(state);
  switch (action.type) {
    case types.INIT_MATRIX:
      if (action.initialState && action.initialState.hasOwnProperty('boardState')) {
        return {
          ...action.initialState.boardState
        };
      }
      matrix.addRandomTile();
      return {
        ...state,
        ...matrix.addRandomTile()
      };
    case types.RESET_MATRIX:
      console.log('RESET_MATRIX# ', action);
      const matrixCopy = JSON.parse(JSON.stringify(defaultState));
      matrix = new Matrix(matrixCopy);
      matrix.addRandomTile();
      return {
        ...defaultState,
        ...matrix.addRandomTile(),
        bestScore: state.bestScore
      };
    case types.RANDOM_TILE:
      return {
        ...state,
        ...matrix.addRandomTile()
      };
    case types.MOVE_UP:
      return {
        ...state,
        ...matrix.swipeUp()
      };
    case types.MOVE_DOWN:
      return {
        ...state,
        ...matrix.swipeDown()
      };
    case types.MOVE_LEFT:
      return {
        ...state,
        ...matrix.swipeLeft()
      };
    case types.MOVE_RIGHT:
      return {
        ...state,
        ...matrix.swipeRight()
      };
    default:
      return state;
  }
}
