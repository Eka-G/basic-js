const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(param) {
    this.direct = param;
  }

  encrypt(str, key) {
    if (!str || !key) throw new Error("enter string to encode and key");

    let strArr = str.split("");
    let strLetters = strArr.filter(item => item != " ");
    let keyArr = key.split("");
    let abc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    function completeKey(arr) {
      keyArr.forEach(item => {
        if (keyArr.length < strLetters.length) keyArr.push(item)
      })

      if (keyArr.length < strLetters.length) completeKey(arr)
    }

    if (keyArr.length < strLetters.length) completeKey(keyArr);

    let strIndex = strArr.map(item => (abc.findIndex(x => x === item.toUpperCase()) !== - 1) ? item = abc.findIndex(x => x === item.toUpperCase()) : item);
    let keyIndex = keyArr.map(item => item = abc.findIndex(x => x === item.toUpperCase()));
    let spaseCount = 0;

    let resArr = strIndex.map(function (item, i, arr) {
      if (typeof item !== "number") return item;

      if (arr[i - 1] === " ") {
        spaseCount += 1;
        return (item + keyIndex[i - spaseCount] < abc.length) ? abc[item + keyIndex[i - spaseCount]] : abc[item + keyIndex[i - spaseCount] - abc.length];
      } else {
        return (item + keyIndex[i - spaseCount] < abc.length) ? abc[item + keyIndex[i - spaseCount]] : abc[item + keyIndex[i - spaseCount] - abc.length];
      }
    });

    return this.direct === undefined ? resArr.join("") : resArr.reverse().join("");
  }

  decrypt(str, key) {
    if (!str || !key) throw new Error("enter string to decode and key");

    let strArr = str.split("");
    let strLetters = strArr.filter(item => item != " ");
    let keyArr = key.split("");
    let abc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    function completeKey(arr) {
      keyArr.forEach(item => {
        if (keyArr.length < strLetters.length) keyArr.push(item)
      });
      if (keyArr.length < strLetters.length) completeKey(arr);
    }

    if (keyArr.length < strLetters.length) completeKey(keyArr);

    let strIndex = strArr.map(item => (abc.findIndex(x => x === item.toUpperCase()) !== - 1) ? item = abc.findIndex(x => x === item.toUpperCase()) : item);
    let keyIndex = keyArr.map(item => item = abc.findIndex(x => x === item.toUpperCase()));
    let spaseCount = 0;

    let resArr = strIndex.map(function (item, i, arr) {
      if (typeof item !== "number") return item;

      if (arr[i - 1] === " ") {
        spaseCount += 1;
        return (item >= keyIndex[i - spaseCount]) ? abc[item - keyIndex[i - spaseCount]] : abc[abc.length + item - keyIndex[i - spaseCount]];
      } else {
        return (item >= keyIndex[i - spaseCount]) ? abc[item - keyIndex[i - spaseCount]] : abc[abc.length + item - keyIndex[i - spaseCount]];
      }
    });

    return this.direct === undefined ? resArr.join("") : resArr.reverse().join("");
  }

}

module.exports = VigenereCipheringMachine;
