// Multiples of 3 or 5
// Link: https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript

// Solution v.1.0
function solution(number){
  if (number < 0) {
    return 0;
  } else {
    let result = 0

    for (let i = 3; i < number; i += 1) {
      if (i % 3 === 0 || i % 5 === 0) {
        result += i;
      } else {
        continue;
      }
    }

    return result;
  }
}

// Test Cases
console.log(solution(10)) // Expected output: 23

/**
 * Algortihm
 * 1. Hacer un condicional que evalue si el número es negativo o positivo. Retornar 0 si es negativo, si no, continuar.
 * 2. Crear una variable contadora que guarde el resultado.
 * 3. Con un for loop evaluar número por número si es múltiplo de 3 o 5. Si es múltiplo, sumar el número al resultado, si no, continuar.
 * 4. Retornar variable contadora.
 */