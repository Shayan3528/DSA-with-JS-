const frequencyArray=(arr)=>{
    let len = arr.length;
    let freArr= new Array(len+1).fill(0);
    for(let i=0;i<len;i++){
        let num = arr[i];
        freArr[num]++;
    }
    return freArr;
}

// Drive Code 
let arr = [2,2,3,4,3,5,6,7];
let res = frequencyArray(arr);
console.log(res);