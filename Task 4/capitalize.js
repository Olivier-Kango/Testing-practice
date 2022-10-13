const capitalize = (string) => {
  if (typeof string !== 'string') {
    throw new Error('Input a string, i.e word');
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
};

module.exports = capitalize;