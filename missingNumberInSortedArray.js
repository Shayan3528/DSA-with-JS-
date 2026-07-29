const missingNumberinSortedArray=(arr)=>{
    let n = arr.length;
   for(let i=0;i<=n;i++){
    if(arr[i]!==i+1){
        return i+1;
    }
   } 
}

/// Drive code 
const arr =[1,2,3,4,5,6,8];
let res = missingNumberinSortedArray(arr);
console.log(res);