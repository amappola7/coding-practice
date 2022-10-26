// Abbreviate a Two Word Name
// Link: https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3

// Solution v.1.0
function abbrevName(name){
  let initials = "";
  let arrayName = name.split(' ');
  arrayName.splice(1, 0, ".");

  arrayName.forEach(word => {
    let letter = word.charAt(0);
    letter = letter.toUpperCase();
    initials += letter;
  });

  return initials;
}

// Test Cases
abbrevName('Sam Harris') // Expected output: S.H
abbrevName('patrick feeney') // Expected output: P.F
