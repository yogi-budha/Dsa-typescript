// Reverse an array


function Reverse(arr: number[]): number[] {
    // let reverseArr: number[] = [];

    // for (let i = arr.length - 1; i >= 0; i--) {
    //     reverseArr.push(arr[i]);
    // }

    // return reverseArr;

    let start:number = 0
    let end:number = arr.length

    while(start>end){
        let temp:number = arr[start]
        arr[start] = arr[end]
        arr[end]=temp
        start ++
        end --
    }

    return arr
}

const data: number[] = Reverse([1, 2, 3, 4, 32, 2]);
console.log(data);