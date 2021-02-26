const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr: [],
  res: '',

  getLength() {
    return this.arr.length;
  },

  addLink(value) {
    value !== "" ? this.arr.push('( ' + value + ' )') : this.arr.push('( )');
    return this;
  },

  removeLink(position) {
    if (Number.isInteger(position) === true && position > 0 && position < this.arr.length) {
      this.arr.splice((position - 1), 1);
    } else {
      this.arr = [];
      throw new Error();
    }
    return this;
  },

  reverseChain() {
    this.arr.reverse();
    return this;
  },

  finishChain() {
    res = this.arr.join('~~');
    this.arr = [];
    return res;
  }
};

module.exports = chainMaker;
