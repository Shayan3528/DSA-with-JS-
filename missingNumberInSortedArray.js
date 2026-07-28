const missingNumberinSortedArray=(arr)=>{
    let n = arr.length;
   for(let i=1;i<=n;i++){
    if(arr[i-1]!==i){
        return i;
    }
   } 
}

/// Drive code 
const arr =[1,2,3,4,6,7,8];
let res = missingNumberinSortedArray(arr);
console.log(res);