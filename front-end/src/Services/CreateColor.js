export const singleColor = (min = 80) => {
  return Math.round(Math.random() * (255 - min) + min, 1);
};
