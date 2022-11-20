// Recursion CountX
// Link: https://the-winter.github.io/codingjs/exercise.html?name=countX&title=Recursion-1

// Solution v.1.0
function countX(str){
if(str.length === 0) {
  return 0
}

if (str[0] === 'x') {
  return 1 + (countX(str.slice(1)))
} else {
  return (countX(str.slice(1)))
}
}

// Test Cases
console.log(countX('xxhixx')) // Expected output: 4
console.log(countX('xhixhix')) // Expected output: 3
console.log(countX('hi')) // Expected output: 0
