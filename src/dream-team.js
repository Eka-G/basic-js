const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  return Array.isArray(members) === false ? false :
    members
      .filter(item => typeof item === "string")
      .map(name => name.trim().substr(0, 1).toUpperCase())
      .sort()
      .join('');
};
