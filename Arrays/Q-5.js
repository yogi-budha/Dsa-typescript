"use strict";
// Kadance algorithm [maximum sub arrays summ]
function KadanceAlgo(arr) {
    let currSum = 0;
    let maxSum = Number.MIN_VALUE;
    for (let i = 0; i < arr.length; i++) {
        currSum += arr[i];
        if (currSum > maxSum) {
            maxSum = currSum;
        }
    }
    if (currSum < 0) {
        currSum = 0;
    }
    return maxSum;
}
const kadanceResult = KadanceAlgo([1, 2, 3, 4, 3, -5]);
console.log(kadanceResult);
