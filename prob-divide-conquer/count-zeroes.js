// function countZeroes(arr) {
//   // Ensure the input is an array
//   if (!Array.isArray(arr)) {
//     throw new TypeError("The input must be an array");
//   }
//   // Initialize q counter for zero
//   let zeroCount = 0;

//   //ITERATE THROUGH EACH ELEMENT IN THE ARRAY

//   for (i = 0; i < arr.length; i++) {
//     //Check if the current element is zero

//     if (arr[i] === 0) {
//       zeroCount++;
//     }
//   }

//   //Return the count of zeros
//   return zeroCount;
// }

function countZeroes(arr) {
  // add whatever parameters you deem necessary - good luck!
  let firstZero = findFirst(arr);
  if (firstZero === -1) return 0;

  return arr.length - firstZero;
}

function findFirst(arr, low = 0, high = arr.length - 1) {
  if (high >= low) {
    let mid = low + Math.floor((high - low) / 2);
    if ((mid === 0 || arr[mid - 1] === 1) && arr[mid] === 0) {
      return mid;
    } else if (arr[mid] === 1) {
      return findFirst(arr, mid + 1, high);
    }
    return findFirst(arr, low, mid - 1);
  }
  return -1;
}

module.exports = countZeroes;
