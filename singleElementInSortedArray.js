const singleElementInSortedArray=(arr)=>{
    let xor = 0;

    for(let i=0;i<arr.length;i++){
        xor ^=arr[i];
    }

    return xor;
}

/// Drive code 

let res = singleElementInSortedArray([1,1,2,2,3,4]);
console.log(res);