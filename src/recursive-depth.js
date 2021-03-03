const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, res = 1) {
    if (!Array.isArray(arr)) return 1;

    arr.reduce((depth, item) => {
      if (Array.isArray(item)) {
        depth = this.calculateDepth(item) + 1;
        depth > res ? res = depth : res;
      }
    }, 1)

    return res
  }
};
