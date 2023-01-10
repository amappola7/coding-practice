// Find the odd int
// Link: https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript

// Solution v.1.0
function findOdd(A) {
  // Filtrar el array input
  const numbers = [];
  A.forEach(number => {
    return numbers.includes(number) ? false : numbers.push(number);
  });

  // Crear un objeto que guardará el número de veces que se repite un número en el array
  const cache = {};

  // Contar el número de veces que un objeto se repite en el array
  numbers.forEach(number => {
    let times = 0;

    A.forEach(num => {
      if (num === number) times++;
    })

    cache[number] = times;
  })

  // Encontrar el número que se repite un número impar de veces y retornarlo
  let result;

  for (const [key, value] of Object.entries(cache)) {
    if (value % 2 !== 0) result = key;
  }

  return parseInt(result);
}

// Test Cases
console.log('Test 1:', findOdd([7]))// Expected output: 7
console.log('Test 2:', findOdd([0]))// Expected output: 0
console.log('Test 3:', findOdd([1,1,2]))// Expected output: 2
console.log('Test 4:', findOdd([0,1,0,1,0]))// Expected output: 0
console.log('Test 5:', findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]))// Expected output: 4

/**
 * Algorithm
 * 1. Filtrar el array para saber qué números son los que tengo que contar.
 * 2. Empezar a recorrer el array filtrado y compararlo con el array input.
 *  2.1. Crear un objeto caché con el número de veces que aparece cada número.
 *  2.2. Comparar la posición actual de cada array, si los valores coinciden, entonces sumar al objeto.
 * 3. Recorrer el objeto y retornar el número que aparece un número impar de veces.
 */