export const getRatingLabel = (value) => {
  if (value < 3) {
    return `Bad`;
  } else if (value >= 3 && value < 5) {
    return `Normal`;
  } else if (value >= 5 && value < 8) {
    return `Good`;
  } else if (value >= 8 && value < 10) {
    return `Very good`;
  } else if (value === 10) {
    return `Awesome`;
  }
  return `No rating`;
};
