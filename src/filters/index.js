export const starFormat = star => {
  star = star / 2;
  if (star % 1 !== 0) {
    star = parseInt(star) + 0.5;
    return star;
  }
  return star;
};
