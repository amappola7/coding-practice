// tenRun
// Link: https://the-winter.github.io/codingjs/exercise.html?name=tenRun&title=Array-2

// Solution v.1.0
function tenRun(nums){
  let lastMultiple = nums[0];

  const result = nums.map((num) => {
    if (lastMultiple % 10 !== 0) {
      lastMultiple = num;
      return num;
    } else {
      if(num % 10 === 0) {
        lastMultiple = num;
        return num;
      } else {
        return lastMultiple
      }
    }

  })

  return result;
}

// Test Cases
console.log(tenRun([2, 10, 3, 4, 20, 5])) // Expected output: [2,10,10,10,20,20]
console.log(tenRun([10, 1, 20, 2])) // Expected output: [10,10,20,20]
console.log(tenRun([10, 1, 9, 20])) // Expected output: [10,10,10,20]

/**
 * Algorithm
 * 1. Recorrer el array con map para poder modificarlo.
 * 2. Crear una variable que guarde el último número múltiplo.
 * 2. Hacer condicional que verifique si es múltiplo de 10 o no. Si es múltiplo guardarlo en el array, si no guardar el último número múltiplo.
 */

// Other solution (not mine)
//  function tenRun(nums){
  
//   const result = [];

//   if (nums.length > 0) {
//     result.push(nums[0]);

//     for (let i = 1; i < nums.length; i++) {
//       const previous = result[i - 1];
//       const actual = nums[i];

//       if (actual % 10 === 0) {
//         result.push(actual);
//       } else {
//         if (previous % 10 === 0) {
//           result.push(previous);
//         } else {
//           result.push(actual);
//         }
//       }
//     }
//   }
//   return result;
  
// }
