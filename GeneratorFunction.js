function* counter() {
    let count = 0;
    while (true) {
      yield count++;
    }
  }
  
  const iterator = counter();
  console.log(iterator.next().value); // Output: 0
  console.log(iterator.next().value); // Output: 1
  console.log(iterator.next().value); // Output: 2
  