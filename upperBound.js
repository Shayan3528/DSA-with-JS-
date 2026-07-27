const upperBound=(arr,target)=>{
    let low=0;
    let high=arr.length;
    let ans=0;

    while(low<=high){
        let mid = low+Math.floor((high-low)/2);
        if(arr[mid]>target){
            ans = mid;
            high=mid-1;
        }else{
            low=mid+1;
        }
    }
    return ans;
}

/// Drive code 
let res =upperBound([2,3,7,10,11,11,25],11);
console.log(res);
