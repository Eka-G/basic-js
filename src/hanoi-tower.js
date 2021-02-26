const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let res = {
    turns: 1,
    seconds: 1,
  };

  for (i = 1; i < disksNumber; i++) {
    res.turns = res.turns * 2 + 1; //каждый последующий диск добавлет *2+1 шагов
  }

  res.seconds = Math.floor(res.turns * 60 * 60 / turnsSpeed);
  return res;
};
