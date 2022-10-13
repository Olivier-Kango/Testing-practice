const stringLength = (string) => {
  let length = string.length;
  if(length > 0 && length < 11) {
    return length
  }
  
  return ('Sould have 1 to 10 Characters');
};

module.exports = stringLength;