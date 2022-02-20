const getRandomNumberSimple = (numberFrom, numberNext) => {
  if (numberFrom >= 0 && numberNext >= 0 && numberFrom < numberNext) {
    const numberMin = Math.ceil(numberFrom);
    const numberMax = Math.floor(numberNext);
    const randomSimple = Math.floor(Math.random() * (numberMax - numberMin + 1)) + numberMin;
    return Number(randomSimple);
  }
  return new TypeError('Некоректно указанны данные');
};

const getRandomNumberFloat = (numberFrom, numberNext, numberFloat = 0) => {
  if (numberFrom >= 0 && numberNext >= 0 && numberFrom < numberNext && numberFloat >= 0) {
    const randomFloat = (Math.random() * (numberNext - numberFrom) + numberFrom).toFixed(numberFloat);
    return Number(randomFloat);
  }
  return new TypeError('Некоректно указанны данные');
};

getRandomNumberSimple(2.1, 9.5);
getRandomNumberFloat(6, 5, 3);
