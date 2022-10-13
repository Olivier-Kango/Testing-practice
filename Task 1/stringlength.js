const stringLength = (string) => {
  const { length } = string;
  if (length > 0 && length < 11) {
    return length;
  }

  return ('Sould have 1 to 10 Characters');
};

module.exports = stringLength;