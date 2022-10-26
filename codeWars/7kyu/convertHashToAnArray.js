// Convert Hash To An Array

// Solution v.2.0.
function convertHashToArray(hash){
  const output = Object.entries(hash);

  return output.sort();
}

// Test Cases
convertHashToArray({name: 'Jeremy', age: 24, role: 'Software Engineer'}); // Expected output: [["name", "Jeremy"], ["age", 24], ["role", "Software Engineer"]]