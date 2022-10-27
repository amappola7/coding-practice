// Sorted? yes? no? how?
// https://www.codewars.com/kata/580a4734d6df748060000045/train/javascript

// Solution v.1.0
function isSortedAndHow(array) {
  const arrayAscending = [...array].sort(function compare(a, b) {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    // a debe ser igual b
    return 0;
  });

  const arrayDescending = [...arrayAscending].reverse();

  if (array[0] === arrayAscending[0] && array[array.length - 1] === arrayAscending[arrayAscending.length - 1]){
      return 'yes, ascending'
  } else if (array[0] === arrayDescending[0] && array[array.length - 1] === arrayDescending[arrayAscending.length - 1]){
    return 'yes, descending'
  } else {
    return 'no';
  }
}

// Test Cases
console.log(isSortedAndHow([1, 2])) // Expected output: "yes, ascending"
console.log(isSortedAndHow([15, 7, 3, -8])) // Expected output: "yes, descending"
console.log(isSortedAndHow([4, 2, 30])) // Expected output: "no"