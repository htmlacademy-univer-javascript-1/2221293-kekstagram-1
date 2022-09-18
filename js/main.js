function getRandomNumber(start, end){
  if(start < 0 || end < 0){
    return -1;
  }
  start = Math.min(start,end);
  end = Math.max(start, end);
  return Math.round(Math.random()* (end - start + 1) + start);
}

function checkLineLength(line, maxLength){
  return (line.length <= maxLength);
}

getRandomNumber(10,20);
checkLineLength("Строка",4);
