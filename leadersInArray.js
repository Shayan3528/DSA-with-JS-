const leadersInArray = (arr) => {
    let len = arr.length;
    let res = [];
    let suffixMax=arr[len-1];
    res.push(suffixMax);
    for(let i=len-2;i>=0;i--){
        if(arr[i]>=suffixMax){
            suffixMax=arr[i];
            res.push(suffixMax);
        }
    }
    return res.reverse();
}

/// drive out 
const arr = [16, 17, 4, 3, 5, 2];
let res = leadersInArray(arr);
console.log(res);
