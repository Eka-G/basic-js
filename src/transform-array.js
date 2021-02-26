const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let res = [];

  arr.forEach((item, index, arr) => {
    switch (item) {
      case "--discard-next":
        if (index < arr.length - 1) res.push(item); //сохранить послед-ть команд (после обработать, заменить, вырезать)
        break;
      case "--double-next":
        if (index < arr.length - 1) res.push(item) //сохранить послед-ть команд (после обработать, заменить)
        break;

      case "--discard-prev":
        if (index > 0) res.pop();
        break;
      case "--double-prev":
        if (index > 0) res.push(res[res.length - 1]);
        break;

      default:
        if (res[res.length - 1] === "--discard-next") { //обработка сохраненной команды
          res[res.length - 1] = undefined;
        } else if (res[res.length - 1] === "--double-next") { //обработка сохраненной команды
          res[res.length - 1] = item;
          res.push(item)
        } else {
          res.push(item)
        }
    }
  })

  return res.filter(item => item != undefined)
}
