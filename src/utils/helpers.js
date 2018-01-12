export const detectJSONString = (str) => {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
};

export const detectArray = (src) => Array.isArray(src);

export const parseArrayJSON = (arrJSON) => {
  let arr = [];
  if (detectJSONString(arrJSON)) {
    const arrParsed = JSON.parse(arrJSON);
    if (detectArray(arrParsed)) {
      arr = arrParsed;
    }
  }
  return arr;
};
