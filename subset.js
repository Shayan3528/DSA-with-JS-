const subsets =(arr)=>{
    let n = arr.length;
    let allSubset=[];
    let totalSubset= 1<<n;
    for(let mask =0;mask<totalSubset;mask++){
        let currentSubset=[];

        for(let j=0;j<n;j++){
            if((mask & (1<<j))!==0){
                currentSubset.push(arr[j])
            }
        }
        allSubset.push(currentSubset);
    }
    return allSubset;
}

// Drive code 
let res = subsets([1,2,3]);
console.log(res);