// Sum of Array Elements

function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}
console.log(sumArray([1, 2, 3, 4]));

// Input: [1, 2, 3, 4] → Output: 10