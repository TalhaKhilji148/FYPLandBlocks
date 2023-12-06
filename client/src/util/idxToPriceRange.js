export const arrPriceRanges = ["0-10", "10-20", "20-30", "30-40", "40-50"];

export const priceRangeToIndex = (priceRange) => {
  const index = arrPriceRanges.findIndex((priceRg) => priceRg === priceRange);

  return index;
};
