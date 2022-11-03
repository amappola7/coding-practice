// Recursion - Triangle
// Link: https://the-winter.github.io/codingjs/exercise.html?name=triangle&title=Recursion-1

// Solution v.1.0
function triangle(rows){
  if (rows === 0) {
    return 0
  } else {
    return rows + triangle(rows - 1);
  }
}

// Test Cases
console.log(triangle(0)) // Expected output: 0
console.log(triangle(1)) // Expected output: 1
console.log(triangle(2)) // Expected output: 3
