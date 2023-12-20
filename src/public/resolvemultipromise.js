// const array = [
//     fetch('https://jsonplaceholder.typicode.com/posts'),
//     Promise.reject(), // Simulates first fetch failing immediately
//     fetch('https://jsonplaceholder.typicode.com/photos')
//   ]

  const array = [Promise.reject(),Promise.reject()]
  
  async function makeRequests() {
    try {
      const responses = await Promise.allSettled(array);
      // Handles array of fetch requests with Promise.allSettled()
      debugger;
      const successArray = [];
      responses.map(response => { 
        if (response.status === "fulfilled") {
          successArray.push(response);
        }
      })
      // Pushes only successfully fulfilled responses into successArray
  
      const data = await Promise.allSettled(successArray.map(response => response.value.json()))
      // Reads readable stream on body of responses in successArray to JS object (from JSON)
  
      data.forEach(obj => console.log(obj.value))
      // Logs values on objects (return values of successful fetches)
      // Array(100) [ {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, … ]
      // Array(5000) [ {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, … ]
  
    } catch {
      console.error("Multiple fetch failed");
    }
  }
  
  makeRequests();