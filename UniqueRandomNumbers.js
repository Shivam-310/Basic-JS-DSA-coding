function uniqueRandomNumbers(length, min, max) {
    const result = [];
    while (result.length < length) {
      const num = Math.floor(Math.random() * (max - min + 1)) + min;
      if (!result.includes(num)) {
        result.push(num);
      }
    }
    return result;
  }
  