import { getRandomNumber } from "./get-random-number";

const getRandomElement = (array) => {
  return array[getRandomNumber(0, array.length - 1)];
};

export {getRandomElement};
