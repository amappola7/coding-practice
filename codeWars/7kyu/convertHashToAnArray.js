// Convert Hash To An Array
// Link: https://www.codewars.com/kata/59557b2a6e595316ab000046

// Solution v.2.0.
function convertHashToArray(hash){
  const output = Object.entries(hash);

  return output.sort();
}

// Test Cases
convertHashToArray({name: 'Jeremy', age: 24, role: 'Software Engineer'}); // Expected output: [["name", "Jeremy"], ["age", 24], ["role", "Software Engineer"]]