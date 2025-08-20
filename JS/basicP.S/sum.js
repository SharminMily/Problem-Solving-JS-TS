// 1. Sum of Two Numbers
// Input: 5, 10 → Output: 30

function sumTwoNumber(a,b){
  return a + b
}
console.log((sumTwoNumber(5, 25)))

// 2. Sum of First n Natural Numbers
//  Input: n = 5 → Output: 15 (1+2+3+4+5) = // 15

function sumNatural(n){
  let sum = 0;
  for (let i = 1; i <=n; i++){

    sum +=i ;
  }
  return sum;
  }

console.log(sumNatural(5)); 


// 3. Sum of All Numbers in an Array
//  Input: [1, 2, 3, 4, 5] → Output: 15

function sumArray(arr) {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return sum;
}

console.log(sumArray([1, 2, 3, 4, 5]));

// 4. Sum of Array Elements
// Input: [1, 2, 3, 4] → Output: 10
function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}
console.log(sumArray([1, 2, 3, 4]));






