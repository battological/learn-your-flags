import base62 from 'Base62';

const compressor = (stack) => {
  /**
   * @param {number[]} toSave - array of stack indexes to save
   * @return {string} the string representing the saved flags
   */
  const compress = (toSave) => {
    return stack
      .map((e, i) => convert(i))
      .filter((e, i) => toSave.length < stack.length / 2 ? toSave.includes(i) : !toSave.includes(i))
      .join('');
  };
  
  /**
   * @param {string} chars - string result of compress function
   * @return {Object[]} the substack represented by chars
   */
  const decompress = (chars) => {
    const indexes = chars
      .match(/.{2}/g)
      .map(e => convert(e));
    return stack
      .filter((e, i) => (
        indexes.length < stack.length / 2 ? indexes.includes(i) : !indexes.includes(i)
      ));
  }
  
  const convert = n => {
    if (typeof n === 'number') {
      const converted = base62.encode(n);
      return converted.length === 1 ? '0'+converted : converted;
    } else if (typeof n === 'string') {
      return = base62.decode(n);
    }
  }

  return { compress, decompress };
};
