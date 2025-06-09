// Find the "Kth" smallest/largest element in an array

function KthSmallest(arr:number[],k:number):number{
    const newArr = [... new Set(arr)] // Remove the duplicate in an array

    newArr.sort((a,b)=>a-b) // short the array

    return newArr[k-1]
}


const Kthvalue:number = KthSmallest([1,2,3,4,32,2],4)

console.log(Kthvalue)
