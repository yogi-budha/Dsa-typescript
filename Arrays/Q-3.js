"use strict";
// Find the "Kth" smallest/largest element in an array
function KthSmallest(arr, k) {
    const newArr = [...new Set(arr)]; // Remove the duplicate in an array
    newArr.sort((a, b) => a - b); // short the array
    return newArr[k - 1];
}
const Kthvalue = KthSmallest([1, 2, 3, 4, 32, 2], 4);
console.log(Kthvalue);
