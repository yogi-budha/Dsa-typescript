// Finding the maximum and minimum Element in the Array.

function maxAndmin(arr:number[]):[number,number]{

    let max:number = arr[0];
    let min:number = arr[0];

    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max = arr[i]
        }
        if(arr[i]<min){
            min = arr[i]
        }
    }

    return ([max,min])
    
}

const result = maxAndmin([12,23,45,34,5,7])

console.log(result)