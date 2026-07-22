const subArray=(arr)=>{
    
    let len = arr.length;
    let subArr=[];
    for(let start=0;start<len;start++){
        for(let end=start;end<len;end++){
            // subarray print
            let temp=[];
            for(let i=start;i<=end;i++){

                temp.push(arr[i]);
            }
            subArr.push(temp);
        }
    }
    return subArr;
}

let arr=[1,2,3];
let res = subArray(arr);
console.log(...res);