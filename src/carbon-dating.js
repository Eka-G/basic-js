const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  const SAMPLE_ACTIVITY = Number.parseFloat(sampleActivity);
  const k = (0.693 / HALF_LIFE_PERIOD);

  if (typeof sampleActivity !== "string" || isNaN(SAMPLE_ACTIVITY) === true || SAMPLE_ACTIVITY > MODERN_ACTIVITY || SAMPLE_ACTIVITY <= 0) return false

  let age = Math.log(MODERN_ACTIVITY / SAMPLE_ACTIVITY) / k;
  return Math.ceil(age);
};
