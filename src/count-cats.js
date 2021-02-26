const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  return matrix.reduce((sum, current) => sum + current.filter(item => item === "^^").length, 0);
};
