// Sort an Arrays of 0s, 1s and 2s

// function SwapTwoNmber(a:number,b:number){
//     let temp :number = a;
//     a=b
//     b=temp


// }

function SortArray(arr:number[]){
    let low =0;
    let high = arr.length-1
    let mid = 0
    let temp :number

    while(mid<=high){
        if(arr[mid] === 0){
            temp = arr[low]
            arr[low] = arr[mid]
            arr[mid] = temp
            low ++;
            mid ++;
        }else if(arr[mid] === 2){
                temp = arr[mid]
            arr[mid] = arr[high]
            arr[high] = temp
            high --
        }else if(arr[mid] === 1){
            mid ++
        }
    }

    return arr
}


const sortedItems:number[] = SortArray([1,2,0,2,1,0,2])

console.log(sortedItems)
