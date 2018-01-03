/**
 * Mobile touch direction detect
 * @param {object} params
 * @param {function} callback
 */

export default function swipeDetect(params = {}, callback = () => {}) {
  const {
    distX,
    distY
  } = params;

  let swipeDir = 'none';
  // required min distance traveled to be considered swipe
  const threshold = 10;

  let absDistX = Math.abs(distX);
  let absDistY = Math.abs(distY);

  if (absDistX > absDistY) {
    // condition for horizontal swipe met
    if (absDistX - absDistY > threshold) {
      // if dist traveled is positive, it indicates right swipe
      swipeDir = distX > 0 ? 'right' : 'left';
    }
  } else {
    // condition for vertical swipe met
    if (absDistY - absDistX > threshold) {
      // if dist traveled is positive, it indicates down swipe
      swipeDir = distY > 0 ? 'down' : 'up';
    }
  }

  callback(swipeDir);
}
