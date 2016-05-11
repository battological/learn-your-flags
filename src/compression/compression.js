import base62 from 'base62';

const compressor = (stack) => {
  /**
   * @param {number[]} toSave - array of stack indexes to save
   * @return {string} the string representing the saved flags
   */
  const compress = (toSave) => {
    const adding = toSave.length < stack.length / 2;
    return (+adding+'')
      .concat(
        stack
          .map((e, i) => convert(i))
          .filter((e, i) => adding ? toSave.includes(i) : !toSave.includes(i))
          .join('')
      );
  };
  
  /**
   * @param {string} chars - string result of compress function
   * @return {number[]} the indexes of the original stack to use
   */
  const decompress = (chars) => {
    const adding = parseInt(chars[0], 10);
    return chars
      .substring(1)
      .match(/.{2}/g)
      .map(e => convert(e));
  }
  
  const convert = n => {
    if (typeof n === 'number') {
      const converted = base62.encode(n);
      return converted.length === 1 ? '0'+converted : converted;
    } else if (typeof n === 'string') {
      return base62.decode(n);
    }
  }

  return { compress, decompress };
};

export default compressor;
