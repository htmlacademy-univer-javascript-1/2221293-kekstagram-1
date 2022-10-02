import { getRandomNumber } from './get-random-number';

const getRandomElement = (array) => array[getRandomNumber(0, array.length - 1)];

export {getRandomElement};
