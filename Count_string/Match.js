function countWords(str) {
  const words = str.toLowerCase().match(/\b\w+\b/g);
  const result = {};
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (result[word]) {
      result[word]++;
    } else {
      result[word] = 1;
    }
  }
  return result;
}
