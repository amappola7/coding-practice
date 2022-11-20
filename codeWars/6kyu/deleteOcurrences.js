// Delete occurrences of an element if it occurs more than n times
// Link: https://www.codewars.com/kata/554ca54ffa7d91b236000023/train/javascript

// Solution v.1.0 - Not achieved
function deleteNth(arr,n){
  const result = [];
  const evaluatedNumbers = [];

  arr.forEach(elem => {
    if (!evaluatedNumbers.includes(elem)) {
      evaluatedNumbers.push(elem);
      console.log('Case:', elem);
      let counter = 0;
      console.log('Counter:', counter)
      arr.forEach(elem2 => {
        console.log('Comparison number:', elem2)
        if (elem === elem2) {
          counter += 1;
          if (counter <= n) {
            console.log('Push:', elem2, '\n----------')
            result.push(elem2)
          } else {
            console.log('No push', elem2, '\n----------')
          }
        } else {
          console.log('No push', elem2, '\n----------')
        }
      })
    }
  })

  console.log('Obtenido:', result);
  return result;
}

// Test Cases
// deleteNth([20,37,20,21], 1) // Expected output: [20,37,21]
// deleteNth([1,1,3,3,7,2,2,2,2], 3) // Expected output: [1, 1, 3, 3, 7, 2, 2, 2]
// deleteNth([1,2,3,1,2,1,2,3], 2) // Expected output: [1,2,3,1,2,3]
// deleteNth([20,37,20,21], 1) // Expected output: [20,37,21]
// deleteNth([1,2,3,1,1,2,1,2,3,3,2,4,5,3,1], 3) // Expected output: [ 1, 2, 3, 1, 1, 2, 2, 3, 3, 4, 5 ]


/**
 * Algorithm
 * 1. Recorrer el array y seleccionar un número específico.
 * 2. Hacer un segundo recorrido del array para solo evaluar el número específico que seleccioné.
 * 3. Dentro de ese segundo loop, hacer una variable que cuente el número de apariciones.
 *  3.1. Si el número de apariciones es menor o igual al número requerido continuar.
 *  3.2. Si es mayor a lo requerido eliminar esa posición del primer array.
 * 4. Retornar el array final.
 */
