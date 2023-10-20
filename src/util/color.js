export const makeHexTranslucent = (hex, transparency) => {
  return `rgba(${parseInt(hex.slice(1, 3), 16)}, ${parseInt(
    hex.slice(3, 5),
    16
  )}, ${parseInt(hex.slice(5, 7), 16)}, ${transparency})`;
};
