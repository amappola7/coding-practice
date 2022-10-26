// Solution v.1.0
function unusedDigits() {
  const args = Object.values(arguments);
  const digitsArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  // Convertir argumentos a type string
  const numbers = [];
  args.forEach((number) => {
    let num = number.toString();
    numbers.push(num);
  })

  // Separar strings
  const workingDigits = [];
  numbers.forEach((num) => {
    let digits = num.split("");
    digits.forEach((digit) => {
      workingDigits.push(digit);
    })
  })

  // Comparar array de argumentos con array de digitos
  const output = [];
  digitsArray.forEach((digit) => {
      if (workingDigits.includes(digit)) {
        return false;
      } else {
        output.push(digit);
      }
    })

  return output.sort().join('');
}

// Test Cases
unusedDigits(12, 34, 56, 78) // Expected Output: "09"
unusedDigits(2015, 8, 26) // Expected Output: "3479"