const getRandomNumber = (start, end) => {
  if(start < 0 || end < 0){
    return -1;
  }
  start = Math.min(start,end);
  end = Math.max(start, end);
  return Math.round(Math.random()* (end - start + 1) + start);
};

export{getRandomNumber};
