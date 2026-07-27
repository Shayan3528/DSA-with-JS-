const lowerBound=(arr,target)=>{
    let len = arr.length;
    let left=0;
    let right=len;
    let ans =0;
    

    while(left<=right){
        let mid =left+ Math.floor((right-left)/2);
        if(arr[mid]>=target){
            ans=mid;
            right=mid-1;
        }else{
            left=mid+1;
        }
       
    }
    return ans;
}


// Drive code 
const arr =[2,4,6,8,10,12];
let target=6;
let res = lowerBound(arr,target);
console.log(res);