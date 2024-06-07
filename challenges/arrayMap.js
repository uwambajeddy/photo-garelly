function hasSubarrayWithSum(arr, target) {
 let currentSum = 0;
 const sumMap = new Map();
 sumMap.set(0, -1);

 for (let i = 0; i < arr.length; i++) {
     currentSum += arr[i];

     if (sumMap.has(currentSum - target)) {
         return true;
     }

     sumMap.set(currentSum, i);
 }

 return false;
}

// Example usage
const arr = [4, 2, 7, 1, 9, 5];
const target = 17;
console.log(hasSubarrayWithSum(arr, target)); // Output: true
