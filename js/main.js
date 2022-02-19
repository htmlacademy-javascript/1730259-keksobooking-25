const getRandomNumber = (numberFrom, numberNext, numberFloat) => {
  if (numberFrom >= 0 && numberNext >= 0 && numberFrom < numberNext && numberFloat >= 0 || numberFloat === undefined) {
    const rand = (Math.random() * (numberNext - numberFrom) + numberFrom).toFixed(numberFloat);
    return Number(rand);
  }
  return new TypeError('диапазон указан некорректно');
};
getRandomNumber(6, 5, 3);
