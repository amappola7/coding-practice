// Convert Hash To An Array

// Solution v.1.0
function convertHashToArray(hash){
  const output = []
  for (let key in hash) {
    output.push([key, hash[key]]);
  }

  return output.sort();
}

// Test Cases
convertHashToArray({name: 'Jeremy', age: 24, role: 'Software Engineer'}); // Expected output: [["name", "Jeremy"], ["age", 24], ["role", "Software Engineer"]]