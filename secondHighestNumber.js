function secondHighest(arr) {
    let highest = Number.MIN_SAFE_INTEGER;
    let secondHighest = Number.MIN_SAFE_INTEGER;
  
    for (let i = 0; i < arr.length; i++) {
      const num = arr[i];
      if (num > highest) {
        secondHighest = highest;
        highest = num;
      } else if (num > secondHighest) {
        secondHighest = num;
      }
    }
  
    return secondHighest;
  }
  