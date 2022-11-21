import {getRandomNumber} from './random-number.js';
import {getRandomElement} from './util.js';

const PHOTOS_COUNT = 25;
const NAMES = [
  'Мария',
  'Андрей',
  'Иван',
  'Сергей',
  'Оксана',
  'Юлия'
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const DESCRIPTIONS = [
  'Фотка',
  'Фотография',
  'Случайный снимок',
  'Редкий кадр'
];

const photosArray = [];

const addComments = (count) => {
  const commentsArray = [];
  for(let i = 0; i < count; i++){
    commentsArray.push({
      id: i,
      avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
      message: getRandomElement(MESSAGES),
      name: getRandomElement(NAMES)
    });
  }
  return commentsArray;
};

const addPhotos = () => {
  for (let i = 0; i < PHOTOS_COUNT; i++){
    photosArray.push({
      id: i + 1,
      url: `photos/${i + 1}.jpg`,
      description: getRandomElement(DESCRIPTIONS),
      likes: getRandomNumber(15,200),
      comments: addComments(getRandomNumber(1,20))
    });
  }
};

addPhotos();
export {photosArray};
