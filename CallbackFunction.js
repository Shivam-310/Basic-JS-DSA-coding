function fetchData(callback) {
    // Simulate a fetch request
    setTimeout(() => {
      const data = { id: 1, name: 'John Doe', email: 'johndoe@example.com' };
      callback(data);
    }, 2000);
  }
  
  function displayData(data) {
    console.log(`User ID: ${data.id}`);
    console.log(`Name: ${data.name}`);
    console.log(`Email: ${data.email}`);
  }
  
  fetchData(displayData);
  