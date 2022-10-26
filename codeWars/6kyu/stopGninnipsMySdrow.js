// Stop gninnipS My sdroW!

// Solution v.1.0
function spinWords(string){
  const input = string.split(' ');
  const output = [];

  input.forEach((word) => {
    if (word.length >= 5) {
      output.push(word.split('').reverse().join(''));
    } else {
      output.push(word);
    }
  })

  return output.join(' ');
}

// Test Cases
spinWords( "Hey fellow warriors" ) // Expected output: "Hey wollef sroirraw"
spinWords( "This is a test") // Expected output: "This is a test"
spinWords( "This is another test" ) // Expected output: "This is rehtona test"