/**
 * Convert thousand
 * @param {Number} value
 * @returns {String}
 */
export const formatNumber = (value) => {
  if (value >= 1000) {
    return (value / 1000).toFixed(0) + "k "; // Convert to thousands and add 'k'
  }
  return value; // Return the number as is if less than 1000
};
