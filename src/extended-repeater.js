const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let res = "",
    value = str;

  if (!options["separator"]) options["separator"] = "+";
  if (!options["repeatTimes"]) options["repeatTimes"] = 1;
  if (!options["additionRepeatTimes"]) options["additionRepeatTimes"] = 1;

  if (options["addition"] !== undefined) {
    for (let i = 0; i < options["additionRepeatTimes"]; i++) {
      (i === options["additionRepeatTimes"] - 1 || !options["additionSeparator"]) ?
        value += options["addition"] : value += options["addition"] + options["additionSeparator"];
    }
  }

  for (let i = 0; i < options["repeatTimes"]; i++) {
    i === options["repeatTimes"] - 1 ? res += value : res += value + options["separator"];
  };

  return res ? res : str;
};
