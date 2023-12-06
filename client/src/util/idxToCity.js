export const arrCity = [
  "islamabad",
  "lahore",
  "karachi",
  "sahiwal",
  "arifwala",
  "pakpattan",
];

export const cityToIdx = (city) => {
  console.log("Function city ", city);
  return arrCity.findIndex((cont) => cont.toLowerCase() === city.toLowerCase());
};

export const idxToCity = (idx) => {
  return arrCity.filter((_, index) => index === Number(idx))[0];
};
