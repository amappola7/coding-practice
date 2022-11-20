// Recursion Power N
// Link: https://the-winter.github.io/codingjs/exercise.html?name=powerN&title=Recursion-1

// Solution v.1.0
function powerN(base, n){
  if (n === 1) {
    return base
  } else {
    return base * powerN(base, (n-1))
  }
}

// Test Cases
console.log(powerN(3, 1)) // Expected output: 3
console.log(powerN(3, 2)) // Expected output: 9
console.log(powerN(3, 3)) // Expected output: 27
console.log(powerN(3, 4)) // Expected output: 81